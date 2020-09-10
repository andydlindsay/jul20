const Rectangle = class {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
};

// const rectangle = new Rectangle(3, 5);
// console.log(rectangle);
// console.log('area', rectangle.area());

const Animal = class {
  constructor(species, age) {
    this.species = species;
    this.age = age;
    this.stomach = [];
  }

  eat(food) {
    this.stomach.push(food);
  }
};

const Cat = class extends Animal {
  constructor(age, faveToy) {
    super('cat', age);
    this.faveToy = faveToy;
  }
};

const mrTiddles = new Cat(7, 'bouncy ball');
console.log(mrTiddles);
mrTiddles.eat('fancy feast');
console.log(mrTiddles);
