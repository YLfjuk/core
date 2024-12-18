export type IsTuple<T extends readonly unknown[]> = number extends T['length']
    ? false
    : true;
