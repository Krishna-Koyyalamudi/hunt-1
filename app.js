var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const compression = require('compression');
const helmet = require('helmet');

const seeder = require('./util/seeder');

var app = express();
app.use(helmet());
//Compress all routes
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));
dotenv.config({ path: '.env' })

// // log port (Heroku issue)
// const port = process.env.PORT || 3004
// console.log(`Running on ${port}`)

// // Are we in production or development?
// const isProduction = process.env.NODE_ENV === 'production'
// console.log(`Environment isProduction = ${isProduction}`)

// Set up mongoose connection
const mongoose = require('mongoose');
const dev_db_url = process.env.ATLAS_URI;
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true ,useUnifiedTopology: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection.on('connected',() =>{
  console.log('Mongoose is connected !');
  //seeder(db);
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, 'public')));

// // Make our db accessible to our router
// app.use(function(req,res,next){
//   req.db = db;
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Running on ${port}`)
  console.log('Press CTRL-C to stop\n')
})

module.exports = app;
