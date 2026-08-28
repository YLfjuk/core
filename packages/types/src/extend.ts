/**
 * @returns Extends existing fields of a type
 *
 * @since 0.0.1
 */
export type Extend<T, Ext extends { [K in keyof T]?: unknown }> = {
	[K in keyof T]: K extends keyof Ext ? T[K] | Ext[K] : T[K];
};
