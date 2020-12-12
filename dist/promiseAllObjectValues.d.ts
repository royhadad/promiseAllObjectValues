declare type GenericObject<T> = {
    [key: string]: T;
};
declare type Unpacked<T> = T extends (infer U)[] ? U : T extends (...args: any[]) => infer U ? U : T extends Promise<infer U> ? U : T;
declare type ReturnType<T> = {
    [P in keyof T]: Unpacked<T[P]>;
};
declare const promiseAllObjectValues: <T extends GenericObject<Promise<unknown>>>(promisesDictionary: T) => Promise<ReturnType<T>>;
export default promiseAllObjectValues;
