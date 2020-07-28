const higherOrderFn = (somethingElse) => {
  const data = {
    username: 'alice'
  };

  console.log('before the timeout');

  const a = () => {
    data.username = 'bob';
    somethingElse(data); 
  };

  setTimeout(a, 1000);

  console.log('after the timeout');
};

console.log('before the main call');
const callback = (user) => {
  console.log('inside the callback', user);
};
higherOrderFn(callback);
console.log('after the main call');
