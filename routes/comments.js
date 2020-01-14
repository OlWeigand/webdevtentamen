const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Comment = db.sequelize.models.Comment;

router.get('/', (req, res, next) => {
    res.render('comments/index', {
        path: '/comments',
        title: 'All Comments',
        description: 'Comments ca va?',
        comments: comments,
        add: 'Add Comment',
        link: 'comments/add-comment'
    });
});

module.exports = router;