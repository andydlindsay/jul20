"use strict";
const sayHello = (name) => {
    // return `hello ${name}`;
    console.log(`hello ${name}`);
};
console.log('hello!!');
sayHello('andy');
const returningPromise = (num, age) => {
    return new Promise((resolve, reject) => {
        resolve(num);
    });
};
