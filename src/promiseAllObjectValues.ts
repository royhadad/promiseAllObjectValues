type GenericObject<T> = {
    [key: string]: T
};

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

const promiseAllObjectValues = <T extends PromisesDictionary>(
    promisesDictionary: T
): Promise<ResultsDictionary<T>> => {
    const {keys, promises} = Object.entries(promisesDictionary).reduce<{
        keys: (keyof T)[];
        promises: Promise<unknown>[];
    }>(
        (acc, [key, promise]) => {
            acc.keys.push(key);
            acc.promises.push(promise);
            return acc;
        },
        {keys: [], promises: []}
    );

    return Promise.all(promises).then((res: Unpacked<T[keyof T]>[]) => {
        return keys.reduce((acc, key, index) => {
            acc[key] = res[index]
            return acc;
        }, {} as ResultsDictionary<T>);
    });
};

export default promiseAllObjectValues;
