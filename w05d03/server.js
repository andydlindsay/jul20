require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const villainRouter = require('./routes/villain-routes');

const app = express();
const port = process.env.PORT || 6789;

app.use(morgan('dev'));
app.set('view engine', 'ejs');

// routes
app.use('/villains', villainRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
