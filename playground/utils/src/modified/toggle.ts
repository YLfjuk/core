import type { FN, Maybe, UnknownArray } from '@ylfjuk-core/types';

type HasDuplicates<T extends readonly unknown[]> = T extends readonly [
    infer First,
    ...infer Rest
]
    ? First extends Rest[number]
        ? true
        : HasDuplicates<Rest>
    : false;

type Settings = {
    allowDuplicates: boolean;
};

type Arr<
    T extends readonly unknown[],
    Options extends Settings
> = Options['allowDuplicates'] extends true
    ? T
    : HasDuplicates<T> extends true
    ? 'Error: array must not contain duplicate values'
    : T;

/**
 *
 * @param options - an array of option to toggle between
 * @param currentOption - the current option
 * @param isEqual - A function that returns if two given elements should be treated as equal
 *
 * @description toggles between elements in an array
 *
 * @note doesn't support duplicates in the array
 *
 * @example
 * const [next,] = toggle([]) // [null, -1]
 * const [next,] = toggle([true, false]) // [true, 0]
 * const [next,] = toggle([true, false], true) // [false, 1]
 * const [next,] = toggle([1, 2], 3) // [1, 0]
 * const [next,] = toggle([{ id: 1 }, { id: 2 }], { id: 2 }, ([a, b]) => a.id === b.id) // [{ id: 1 }, 0]
 *
 * @since ?
 * @modified 0.0.x - Do not allow duplicate options by default
 */
export const toggle = <
    const T extends UnknownArray,
    Options extends Settings = { allowDuplicates: false }
>(
    options: Arr<T, Options>,
    currentOption?: NoInfer<T[number]>,
    isEqual: FN<boolean, [T[number], T[number]]> = (a, b) => a === b
): [Maybe<T>, number] => {
    if (typeof options === 'string') {
        return [null, -1];
    }

    if (!options.length) {
        console.warn('Array has no options to toggle');
        return [null, -1];
    }

    if (!currentOption) return [options[0] as T, 0];

    const currentIdx = options.findIndex((option) =>
        isEqual(option, currentOption)
    );

    if (currentIdx === -1) {
        console.warn(
            '`currentOption` was not found in `options` array. defaulting to the first option'
        );
    }

    const nextIdx = (currentIdx + 1) % options.length;
    const nextOption = options[nextIdx];

    return [nextOption as T, nextIdx];
};
