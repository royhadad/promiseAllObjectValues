"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promiseAllObjectValues = (promisesDictionary) => {
    const { keys, promises } = Object.entries(promisesDictionary).reduce((acc, [key, promise]) => {
        acc.keys.push(key);
        acc.promises.push(promise);
        return acc;
    }, { keys: [], promises: [] });
    return Promise.all(promises).then((res) => {
        return keys.reduce((acc, key, index) => {
            return Object.assign(Object.assign({}, acc), { [key]: res[index] });
        }, {});
    });
};
exports.default = promiseAllObjectValues;
//# sourceMappingURL=promiseAllObjectValues.js.map