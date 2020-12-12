"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promiseAllObjectValues_1 = require("./promiseAllObjectValues");
function sleep(ms, resolveValue) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resolveValue);
        }, ms);
    });
}
const cat1 = {
    height: 1.1,
    color: "black"
};
const runDemo = () => {
    const promisesObject = {
        a: sleep(2000, 1),
        c: sleep(2000, cat1),
        b: sleep(2000, "a")
    };
    promiseAllObjectValues_1.default(promisesObject).then((obj) => {
        console.log(obj.a);
        console.log(obj.b);
        console.log(obj.c);
    });
};
exports.default = runDemo;
//# sourceMappingURL=demo.js.map