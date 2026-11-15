type InfiniteObject = {
	[key: string]: InfiniteObject;
	(...args: unknown[]): InfiniteObject;
	new (...args: unknown[]): InfiniteObject;
};

/**
 * A placeholder for prototyping recursive property access and calls.
 *
 * @remarks Property access, calls, and construction return the same placeholder.
 * Avoid `await`, `Promise.resolve`, and returning it from an async function: its callable
 * `then` causes promise assimilation to remain pending. String conversion and other
 * primitive coercion throw a TypeError.
 *
 * @since 0.0.5
 */
export const InfiniteObject: InfiniteObject = new Proxy<InfiniteObject>(
	// Bound functions have no non-configurable `prototype`, keeping the `ownKeys` trap valid.
	// oxlint-disable-next-line no-extra-bind
	function () {}.bind(null) as InfiniteObject,
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
	},
);
