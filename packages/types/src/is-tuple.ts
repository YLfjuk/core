/**
 * @since  0.0.10
 */
export type IsTuple<T extends readonly unknown[]> = number extends T['length']
    ? false
    : true;
