const fs = require('fs');

// const myFile = fs.readFileSync('./index.txt', { encoding: 'utf-8' });
// console.log(myFile.length);
// console.log('is this async??');

const readFile = (filePath, cb) => {
  fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log('bad stuff here');
      cb(err);
    }

    cb(null, data.length);
  });
};

readFile('./indx.txt', (err, data) => {
  if (err) throw err;

  console.log(data);
});
