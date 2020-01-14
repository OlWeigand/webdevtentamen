const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Post = db.sequelize.models.Post;

//GET: Find all posts
router.get('/', function(req, res) {
    return Post.findAll({
        raw: true
    })
        .then(function(result){
            res.send(result);
        })
});

//Add a forum post
router.get('/add-post', (req, res, next) => {
    res.render('users/addPost', {
        path: '/add-posts',
    });
});

module.exports = router;