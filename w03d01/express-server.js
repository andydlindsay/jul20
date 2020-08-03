const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 6789;

app.set('view engine', 'ejs');

// middleware
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });

app.use(morgan('dev'));

app.get('/', (request, response) => {
  return response.send('hello there from express!');
  // response.send('hello there again from express!');
});

app.get('/users/:id/', (request, response) => {
  const id = request.params.id;
  response.send(`you requested user with id of ${id}`);
});

app.get('/something', (request, response) => {
  // response.send('you made a request to /something');
  // console.log(__dirname);
  // response.sendFile(`${__dirname}/index.html`);
  const templateVariables = {
    username: 'Bob',
    joinDate: 'February 30th',
    songs: [
      'Great Balls of Fire',
      'My Heart Will Go Onnnnnnnn'
    ]
  };

  response.render('something', templateVariables);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
