let iterations = 0;

const interval = setInterval(function() {
  iterations++;

  if (iterations >= 5) {
    // clearInterval(interval);
    clearInterval(this);
  }

  console.log('hello world', iterations);
}, 500);


// setTimeout(() => {
//   clearInterval(interval);
// }, 3100);

// console.log(interval);
// clearInterval(interval);
