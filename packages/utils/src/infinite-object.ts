type InfiniteObject = {
    [key: string]: InfiniteObject;
    (...args: unknown[]): InfiniteObject;
    new (...args: unknown[]): InfiniteObject;
};

export const InfiniteObject: InfiniteObject = new Proxy<InfiniteObject>(
    class {} as InfiniteObject,
    {
        has: () => true,
        set: () => true,
        ownKeys: () => [],
        get: () => InfiniteObject,
        setPrototypeOf: () => true,
        deleteProperty: () => true,
        defineProperty: () => true,
        apply: () => InfiniteObject,
        construct: () => InfiniteObject,
        getPrototypeOf: () => InfiniteObject,
        getOwnPropertyDescriptor: () => undefined,
    }
);
