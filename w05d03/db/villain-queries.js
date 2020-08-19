const client = require('./db');

const getVillains = (cb) => {
  client.query('SELECT * FROM movie_villains;')
    .then((response) => {
      // console.log(response.rows);
      cb(response.rows);
    });
};

const getVillainById = (id) => {
  return client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then((response) => {
      // console.log(response.rows);
      return response.rows[0];
    });
};

module.exports = {
  getVillains,
  getVillainById
};
