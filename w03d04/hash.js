const bcrypt = require('bcryptjs');

const password = 'pineapple';

const salt = bcrypt.genSaltSync(10);

console.log(salt);

const hash = bcrypt.hashSync(password, salt);

console.log(hash);

// const dbHash = '$2a$10$lHpEw6cWqwW9npIrDKZo3OnyrC.8V212mfwsggAMtK0dxHqQQ0PPW';
const dbHash = '$2a$10$nLpu5WjNd3ZESNbXRssxyuDlj00vqAAgQ4ZChci0x748mw0y0ErxO';

const correct = bcrypt.compareSync('pineapple', dbHash);
console.log('correct', correct);

// async
bcrypt
  .genSalt(10)
  .then((salt) => {
    return bcrypt.hash(password, salt);
  })
  .then((hash) => {
    console.log('async hash:', hash);
  });
