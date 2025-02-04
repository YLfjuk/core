/**
 * @description Maps a string enum into an object enum
 *
 * @since 0.0.4
 */
export type MappedEnum<E extends string> = { [K in E]: K };
