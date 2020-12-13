import { ResultsDictionary } from './types';
declare const promiseAllObjectValues: <T extends import("./types").GenericObject<Promise<unknown>>>(promisesDictionary: T) => Promise<ResultsDictionary<T>>;
export default promiseAllObjectValues;
