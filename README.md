promiseAllObjectValues
======================

This npm module exports a function that works just like promise.all,
only instead of accepting an array, it accepts an object that it's
values are promises! This package comes with full typescript support!

Basic usage example:

// import import promiseAllObjectValues from "promiseAllObjectValues";

// simulate an async request function sleep<T>(ms: number, resolveValue:
T): Promise<T> { return new Promise((resolve) =\> { setTimeout(() =\> {
resolve(resolveValue); }, ms); }); }

// some typescript fun! type Cat = { height: number; color: string; };
const cat1: Cat = { height: 12, color: "black" };

const runDemo = ()=\>{ const promisesObject = { a: sleep(2000, 7), b:
sleep(2000, "some string") c: sleep(3000, cat1), };

    promiseAllObjectValues(promisesObject).then((obj) => {
        console.log(obj.a)
        console.log(obj.b)
        console.log(obj.c)
    });

}

runDemo();
