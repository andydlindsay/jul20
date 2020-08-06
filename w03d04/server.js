const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 9876;

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cookieSession({
  name: 'week3day4',
  keys: ['my-secret-dont-tell']
}));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// user database
const users = {
  jstamos: {
    username: 'jstamos',
    password: '$2a$10$mo/J/BolAcbJG4NUIEgvr.mpWOTuradPU4FRzb4MuOwp1fVnFRFnq'
  },
  alice: {
    username: 'alice',
    password: '5678'
  }
};

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/protected', (req, res) => {
  // const username = req.cookies.username;
  const username = req.session.username;
  if (!username) {
    return res.redirect('/login');
  }

  const user = users[username];
  if (!user) {
    return res.redirect('/register');
  }

  res.render('protected', { user });
});

app.get('*', (req, res) => {
  res.redirect('/login');
});

app.put('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // const {username, password} = req.body;

  const user = users[username];
  if (!user) {
    return res.status(401).send('No user with that username found');
  }

  bcrypt
    .compare(password, user.password)
    .then((result) => {
      if (result) {
        // res.cookie('username', user.username);
        req.session.username = user.username;
        res.redirect('/protected');
      } else {
        res.status(401).send('Password incorrect');
      }
    });  
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  bcrypt
    .genSalt(10)
    .then((salt) => {
      return bcrypt.hash(password, salt);
    })
    .then((hash) => {
      console.log('async hash:', hash);
      users[username] = {
        username,
        password: hash
      };

      console.log(users);

      res.redirect('/login');
    }); 
});

app.post('/logout', (req, res) => {
  // res.clearCookie('username');
  req.session = null;
  res.redirect('/login');
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
