// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').parse()
// }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const dotenv = require('dotenv')
dotenv.config({ path: '.env' })

const indexRouter = require('./routes/index')

// Static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))

// view engine setup
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts')
app.use(expressLayouts)
app.use(express.static('public'))

// Mongoose setup
const mongoose = require('mongoose');
const dev_db_url = process.env.ATLAS_URI;
const mongoDB = dev_db_url || process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.Promise = global.Promise;
const db = mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !');
    //seeder(db);
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)