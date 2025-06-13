import type { Suggest, UnknownArray } from '@ylfjuk-core/types';

export const arrIncludes = <
    const Arr extends UnknownArray,
    const El extends Suggest<Arr[number]>
>(
    arr: Arr,
    el: El
) => arr.includes(el);

let test = 'c';

if (Math.random() > 0.5) {
    test = 'd';
}

const arr = ['a', 'b', 'c'] as const;

//? works
arrIncludes(arr, test);

// @ts-expect-error: Argument of type 'string' is not assignable to parameter of type '"c" | "a" | "b"'.ts(2345)
arr.includes(test);
