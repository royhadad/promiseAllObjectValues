promiseAllObjectValues
======================

This node.js module exports a single function that works just like promise.all, only instead of accepting an array, it
accepts an object that it's values are promises!

This package comes with full typescript support!

## Usage example (ES6/Typescript):

```javascript
import promiseAllObjectValues from 'promise-all-object-values';

const promisesDictionary = {
    property1: Promise.resolve('resolved value 1'),
    property2: Promise.resolve('resolved value 2'),
    property3: Promise.resolve('resolved value 3')
};

promiseAllObjectValues(promisesDictionary).then(({property1, property2, property3}) => {
    console.log(property1); // "resolved value 1"
});
```

A demo is worth a thousand words!

https://codesandbox.io/s/intelligent-wood-8eo3g?file=/src/demo.ts
