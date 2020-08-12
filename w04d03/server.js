const express = require('express');

const app = express();
const port = process.env.PORT || 54321;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
