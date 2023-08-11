const sequelize = require('../config/connection');
const {Blog, Comment, User} = require('../models');

const blogData = require('./blogData.json');
const commentData = require('./commentData.json');
const userData = require('./userData.json');