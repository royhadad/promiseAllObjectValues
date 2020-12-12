# promiseAllObjectValues
This npm module exports a function that works just like promise.all, only instead of accepting an array, it accepts an object that it's values are promises!
<br />
This package comes with full typescript support!<br />
<br />
Basic usage example:<br />
<br />
// import<br />
import promiseAllObjectValues from "promiseAllObjectValues";<br />
<br />
// simulate an async request<br />
function sleep<T>(ms: number, resolveValue: T): Promise<T> {<br />
    return new Promise((resolve) => {<br />
        setTimeout(() => {<br />
            resolve(resolveValue);<br />
        }, ms);<br />
    });<br />
}<br />
<br />
// some typescript fun!<br />
type Cat = {<br />
    height: number;<br />
    color: string;<br />
};<br />
const cat1: Cat = {<br />
    height: 12,<br />
    color: "black"<br />
};<br />
<br />
const runDemo = ()=>{<br />
    const promisesObject = {<br />
        a: sleep(2000, 7),<br />
        b: sleep(2000, "some string")<br />
        c: sleep(3000, cat1),<br />
    };<br />
<br />
    promiseAllObjectValues(promisesObject).then((obj) => {<br />
        console.log(obj.a)<br />
        console.log(obj.b)<br />
        console.log(obj.c)<br />
    });<br />
}<br />
<br />
runDemo();
