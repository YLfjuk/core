export const assertNever = (_?: never): never => {
    throw new Error(`Unexpected value: ${_}`);
};

assertNever.silent = (_?: never): void => {
    if (process.env.NODE_ENVIRONMENT !== 'production')
        console.error(`Unexpected value: ${_}`);
};
