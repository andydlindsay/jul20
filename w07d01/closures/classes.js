class Counter {
  constructor() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
    console.log(this.counter);
  }
}

module.exports = Counter;
