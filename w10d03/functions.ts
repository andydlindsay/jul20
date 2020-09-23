const sayHello = (name: string): void => {
  // return `hello ${name}`;
  console.log(`hello ${name}`);
};

console.log('hello!!');

sayHello('andy');

const returningPromise = (num: number, age?: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    resolve(num);
  });
};
