const path = require('path');
const express = require('express');
const router = express.Router();
const db = require('../models/index');
const Object = db.sequelize.models.FoundObject;

module.exports = router;