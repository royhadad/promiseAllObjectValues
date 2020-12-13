type GenericObject<T> = {
    [key: string]: T
};

// Unpacks the type
// official typescript docs:
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
type Unpacked<T> = T extends (infer U)[]
    ? U
    : T extends (...args: any[]) => infer U
        ? U
        : T extends Promise<infer U>
            ? U
            : T;

type ResultsDictionary<T> = {
    [P in keyof T]: Unpacked<T[P]>
};

type PromisesDictionary = GenericObject<Promise<unknown>>

export {ResultsDictionary, Unpacked, GenericObject, PromisesDictionary}