/**
 * Seed the database with sample data.
 *
 * During development, drop & recreate the database on startup.
 *
 * Only as we move into production (and the app is stable) will we
 * begin to store real data.
 * 
 * @author Krishna Sumanth <s538345@nwmissouri.edu>
 */

const mongoose = require('mongoose');
const LOG = require('./logger');

// import model and sample data for each collection
const User = require('../models/user');
const Team = require('../models/team');

// inject Express app to configure it - EVERYTHING in through argument list

// module.exports = async (db) => {
//   LOG.info('START data seeder.');

//   db.dropDatabase();
//   LOG.info('Database deleted; ready for seeding.');

//   const newTeam = await new Team({
//     teamid: 99,
//     teamname: 'Vikings'
//   });
//   LOG.info(`Model Created: ${newTeam}`);

//   await newTeam.save(function (err) {
//     if (err) { LOG.error(`ERROR SAVING newTeam: ${err}`); }
//     else { LOG.info(`Data Saved: ${newTeam}`); }
//   });

//   LOG.info('END Data Seeder. Sample data read and verified.');
// };