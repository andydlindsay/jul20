const http = require('http');
const port = 7654;

const server = http.createServer((request, response) => {
  const method = request.method;
  const url = request.url;

  const route = `${method} ${url}`;

  switch (route) {
    case 'GET /users':
      response.write('<h1>Here are the users!</h1>');
      response.write('<h1>Here are the second users!</h1>');
      response.write('<h1>Here are the third users!</h1>');
      break;
    case 'GET /maps':
      response.write('<h1>Here are the maps!!</h1>');
      break;
    default:
      response.write('<h1>404 route not found</h1>');
  }

  response.end();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
