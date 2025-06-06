/**
 *
 * @since 0.0.2
 */
export const assertNever = (_?: never): never => {
    throw new Error(`Unexpected value: ${_}`);
};

assertNever.silent = (_?: never): void => {
    console.error(`Unexpected value: ${_}`);
};
