const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Comment = db.sequelize.models.Comment;

//All comments (needs work)
router.get('/', (req, res, next) => {
    res.render('comments/index', {
        path: '/comments',
        title: 'All Comments',
        description: 'Comments ca va?',
        add: 'Add Comment',
        link: 'comments/add-comment'
    });
});

//Add a comment
router.get('/add-comment', (req, res, next) => {
    res.render('comments/addComment', {
        path: '/add-comment',
    });
});

module.exports = router;