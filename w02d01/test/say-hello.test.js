const assert = require('assert').strict;
const sayHello = require('../say-hello').sayHello;

describe('sayHello Unit tests', () => {

  it('should return "hello Alice" given "Alice"', () => {
    // do our test
    const actual = sayHello('Alice');
    const expected = 'hello Alice';

    assert.equal(actual, expected);
  });

  it('should return null if no name is specified', () => {
    // do our test
    const actual = sayHello();
    const expected = null;

    assert.equal(actual, expected);
  });

});
