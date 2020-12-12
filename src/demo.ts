import promiseAllObjectValues from "./promiseAllObjectValues";


function sleep<T>(ms: number, resolveValue: T): Promise<T> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resolveValue);
        }, ms);
    });
}

type Cat = {
    height: number;
    color: string;
};
const cat1: Cat = {
    height: 1.1,
    color: "black"
};

const runDemo = ()=>{
    const promisesObject = {
        a: sleep(2000, 1),
        c: sleep(2000, cat1),
        b: sleep(2000, "a")
    };

    promiseAllObjectValues(promisesObject).then((obj) => {
        console.log(obj.a)
        console.log(obj.b)
        console.log(obj.c)
    });
}

export default runDemo;

