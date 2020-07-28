console.log('before the timeout');

const timeout = setTimeout(() => {
  console.log('inside the callback');
}, 0);

console.log(timeout);

console.log('after the timeout');
