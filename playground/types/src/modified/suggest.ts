'use ready';
'use modified'; // Now a generic suggestion

/**
 * @since 0.0.9
 */
export type Suggest<T, Suggestion = unknown> = T | (Suggestion & {});
