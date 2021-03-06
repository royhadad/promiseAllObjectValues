declare type GenericObject<T> = {
    [key: string]: T;
};
declare type Unpacked<T> = T extends Promise<infer U> ? U : T;
declare type ResultsDictionary<T> = {
    [P in keyof T]: Unpacked<T[P]>;
};
declare type PromisesDictionary = GenericObject<Promise<unknown>>;
export { ResultsDictionary, Unpacked, GenericObject, PromisesDictionary };
