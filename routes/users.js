const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const User = db.sequelize.models.User;

//allUsers
router.get('/', (req, res, next) => {
    res.render('users/index', {
        path: '/users',
        title: 'All Users',
        description: 'What function does everybody has?',
        users: users,
        add: 'Add User',
        link: 'users/add-user'
    });
});

//AddUser
router.get('/add-user', (req, res, next) => {
    res.render('users/addUser', {
        path: '/add-users',
    });
});


module.exports = router;