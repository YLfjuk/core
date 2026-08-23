/**
 * Maps a string enum-like type into an object enum-like type.
 *
 * @since 0.0.4
 */
export type MappedEnum<E extends string> = { [K in E]: K };
