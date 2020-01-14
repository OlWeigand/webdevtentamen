const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Object = db.sequelize.models.FoundObject;

//All found objects
router.get('/', (req, res, next) => {
    res.render('objects/index', {
        path: '/objects',
        title: 'All Found Objects',
        description: 'We can help you find it!',
        add: 'Add something you found',
        link: 'objects/add-object'
    });
});

//Add an object
router.get('/add-object', (req, res, next) => {
    res.render('users/addObject', {
        path: '/add-object',
    });
});

module.exports = router;