const express = require('express');
const { personDisplay, personRegister, personUpdate, personDelete, personLogin, personLogout } = require('../Controller/PersonController');
const Auth = require('../Middleware/AuthMiddelware');
const router = express.Router();

// Route to display all persons
router.route('/').get(Auth, personDisplay);

// Route to register a new person
router.route('/register').post(personRegister); // Changed to POST for creation

// Route to update an existing person
router.route('/update').put(Auth, personUpdate); // Changed to PUT for full update

// Route to delete a person
router.route('/delete').delete(Auth, personDelete);

//Route to login a person
router.route('/login').post(personLogin)

//Router to logout a person
router.route('/logout').post(Auth, personLogout)
module.exports = router;
