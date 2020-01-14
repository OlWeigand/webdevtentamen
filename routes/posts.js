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

module.exports = router;