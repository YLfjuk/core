type InfiniteObject = {
	[key: string]: InfiniteObject;
	(...args: unknown[]): InfiniteObject;
	new (...args: unknown[]): InfiniteObject;
};

/**
 * @description An object you can use to access any property or method without worrying about it existing.
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
