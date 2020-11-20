var express = require('express');
var router = express.Router();

// Require controller modules.
const competition_controller = require('../controllers/competitioncontroller');
const player_controller = require('../controllers/playercontroller');
const quest_controller = require('../controllers/questcontroller');
const team_controller = require('../controllers/teamcontroller');
const user_controller = require('../controllers/usercontroller');

/// COMMON ROUTES ///

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('user/loginpage', { title: 'Login Page' });
});

router.get('/create', user_controller.createscreen);



/// USER ROUTES ///

// GET Login as home page.

router.get('/user/create', user_controller.createuser);

router.post('/user/adduser', user_controller.adduser);

router.get('/user/index', user_controller.userlist);

router.get('/user/login', user_controller.login);

router.get('/user/register', user_controller.register);

router.get('/user/forgotpass', user_controller.forgot1);

router.get('/user/receivecode', user_controller.forgot2);

router.get('/user/newpassword', user_controller.forgot3);

router.get('/dashboard', user_controller.dashboard);

router.get('/group', user_controller.group);

/// Team Routes ///

router.get('/team/create', team_controller.createteam);

router.post('/team/addteam', team_controller.addteam);

router.get('/team/index', team_controller.teamlist);

router.get('/team/update', team_controller.updateteam);

router.patch('/team/edit', team_controller.editteam);

router.delete('/team/delete', team_controller.removeteam);

router.get('/team/tinvite', team_controller.tinvite);

router.get('/team/pinvite', team_controller.pinvite);

/// Quest Routes ///

router.get('/quest/create', quest_controller.createquest);

router.post('/quest/addquest', quest_controller.addquest);

router.get('/quest/index', quest_controller.questlist);

router.patch('/quest/edit', quest_controller.editquest);

router.delete('/quest/delete', quest_controller.removequest);

/// Competition Routes ///



module.exports = router;