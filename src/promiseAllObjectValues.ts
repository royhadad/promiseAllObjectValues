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

type ReturnType<T> = {
    [P in keyof T]: Unpacked<T[P]>
};

const promiseAllObjectValues = <T extends GenericObject<Promise<unknown>>>(
    promisesDictionary: T
): Promise<ReturnType<T>> => {
    const { keys, promises } = Object.entries(promisesDictionary).reduce<{
        keys: (keyof T)[];
        promises: Promise<unknown>[];
    }>(
        (acc, [key, promise]) => {
            acc.keys.push(key);
            acc.promises.push(promise);
            return acc;
        },
        { keys: [], promises: [] }
    );

    return Promise.all(promises).then((res) => {
        return keys.reduce((acc, key, index) => {
            return { ...acc, [key]: res[index] };
        }, {}) as ReturnType<T>;
    });
};

export default promiseAllObjectValues;
