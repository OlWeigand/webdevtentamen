const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Object = db.sequelize.models.Object;

//GET: Find all objects
router.get('/', function(req, res) {
    return Object.findAll({
        raw: true
    })
        .then(function(result){
            res.send(result);
        })
});