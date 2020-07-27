const sayHello = (name) => {
  if (!name) {
    return null;
  }

  return `hello ${name}`;
};

const MEANING_OF_EVERYTHING = 42;

// module.exports = sayHello;

module.exports = {
  sayHello: sayHello,
  MEANING_OF_EVERYTHING: MEANING_OF_EVERYTHING
};
