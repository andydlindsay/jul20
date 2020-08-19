const pg = require('pg');
const Client = pg.Client;

const options = {
  user: 'mssasbci',
  password: '8BkdcZvKPqRULcxafidMZdqUTJn1qeEh',
  database: 'mssasbci',
  host: 'drona.db.elephantsql.com',
  port: '5432'
};

const client = new Client(options);

client.connect(() => {
  console.log('connected to the db');
});

const verb = process.argv[2];
let id;

switch (verb) {
  case 'browse':
    client.query('SELECT * FROM movie_villains;')
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'read':
    id = process.argv[3];
    client.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
      .then((response) => {
        console.log(response.rows);
        client.end();
      });
    break;

  case 'edit':
    id = process.argv[3];
    const newVillain = process.argv[4];
    client.query('UPDATE movie_villains SET villain = $2 WHERE id = $1;', [id, newVillain])
      .then(() => {
        console.log('villain updated successfully')
        client.end();
      });
    break;

  case 'add':
    const villainName = process.argv[3];
    const movieName = process.argv[4];
    client.query('INSERT INTO movie_villains(villain, movie) VALUES($1, $2);', [villainName, movieName])
      .then(() => {
        console.log('villain origin story completed!');
        client.end();
      });
    break;

  case 'delete':
    id = process.argv[3];
    client.query('DELETE FROM movie_villains WHERE id = $1;', [id])
      .then(() => {
        console.log('villain reformed!');
        client.end();
      });
    break;
  
  default:
    console.log('please use one of the BROWSE verbs');
    client.end();
}
