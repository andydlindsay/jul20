const assert = require('assert').strict;
// const myObj = require('./say-hello');
// const sayHello = myObj.sayHello;
const sayHello = require('./say-hello').sayHello;

const actual = sayHello('Alice');
const expected = 'hello Alice';

assert.equal(actual, expected);
