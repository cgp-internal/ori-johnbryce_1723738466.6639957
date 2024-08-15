const express = require('express');
const app = express();

const { helloWorldController } = require('./controllers/helloWorld');
const { helloWorldRouter } = require('./routes/index')(helloWorldController);

app.use('/', helloWorldRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});