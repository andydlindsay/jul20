const Counter = require('./classes');
const fnCounter = require('./functions');

const counter = new Counter();

console.log(counter.counter);
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log();
console.log('--------------')
console.log();

fnCounter();
fnCounter();
fnCounter();
fnCounter();
fnCounter();
fnCounter();
fnCounter();
fnCounter();
