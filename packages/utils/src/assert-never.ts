/**
 *
 * @since 0.0.2
 */
export const assertNever = (_?: never): never => {
	throw new Error(`Unexpected value: ${_}`);
};

assertNever.silent = (_?: never): void => {
	// oxlint-disable-next-line no-console -- preserves the existing diagnostic output.
	console.error(`Unexpected value: ${_}`);
};
