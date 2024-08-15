const express = require('express');
const router = express.Router();
const { helloWorldController } = require('./controllers/helloWorld');

router.get('/', helloWorldController);

module.exports = { helloWorldRouter: router };