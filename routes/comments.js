const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Comment = db.sequelize.models.Comment;