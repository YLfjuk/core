import type { MockInstance } from 'vitest';
import {
    afterAll,
    afterEach,
    beforeEach,
    describe,
    expect,
    it,
    test,
    vi,
} from 'vitest';
import { noop } from '../src/noop';
import { toggle } from '../src/toggle';

describe('toggles between elements in an array', () => {
    let consoleSpy: MockInstance<(typeof console)['warn']>;

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'warn').mockImplementation(noop);
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    afterAll(() => {
        vi.restoreAllMocks();
    });

    it('should return the first (index = 0) option when `currentOption` is not provided', () => {
        const options = [1, 2, 3];

        const [next, idx] = toggle(options);

        expect(next).toBe(1);
        expect(idx).toBe(0);

        expect(consoleSpy).not.toHaveBeenCalled();
    });

    it.each([
        [1, 2, 1],
        [2, 3, 2],
        [3, 4, 3],
        [4, 5, 4],
        [5, 6, 5],
    ])(
        'should return the next option when `currentOption` is provided and not the last element',
        (currentOption, nextOption, nextIdx) => {
            const options = [1, 2, 3, 4, 5, 6];

            const [next, idx] = toggle(options, currentOption);

            expect(next).toBe(nextOption);
            expect(idx).toBe(nextIdx);

            expect(consoleSpy).not.toHaveBeenCalled();
        }
    );

    it('should wrap around and return the first option when `currentOption` is the last element', () => {
        const options = [1, 2, 3, 4, 5, 6];

        const [next, idx] = toggle(options, 6);

        expect(next).toBe(1);
        expect(idx).toBe(0);

        expect(consoleSpy).not.toHaveBeenCalled();
    });

    it('should wrap around and return the first option when `currentOption` is the last element', () => {
        const options = [1, 2, 3, 4, 5, 6];

        const [next, idx] = toggle(options, 6);

        expect(next).toBe(1);
        expect(idx).toBe(0);

        expect(consoleSpy).not.toHaveBeenCalled();
    });

    it('should work with objects (by ref)', () => {
        const options = [1, 2, 3, 4, 5, 6].map((id) => ({ id }));

        const [next, idx] = toggle(options, options[1]);

        expect(next).toStrictEqual({ id: 3 });
        expect(next).not.toBe({ id: 3 });
        expect(next).toBe(options[2]);
        expect(idx).toBe(2);
    });

    it('should return first element passing a copy of an option object (by ref)', () => {
        const options = [1, 2, 3, 4, 5, 6].map((id) => ({ id }));

        const [next, idx] = toggle(options, { id: 2 });

        expect(next).toStrictEqual({ id: 1 });
        expect(next).not.toBe({ id: 1 });
        expect(next).toBe(options[0]);
        expect(idx).toBe(0);

        expect(next).not.toStrictEqual({ id: 3 });
        expect(next).not.toBe({ id: 3 });
        expect(idx).not.toBe(2);
    });

    it('should work when providing a `isEqual` function', () => {
        const options = [1, 2, 3, 4, 5, 6].map((id) => ({ id }));

        const [next, idx] = toggle(options, { id: 2 }, (a, b) => a.id === b.id);

        expect(next).toBe(options[2]);
        expect(idx).toBe(2);
    });

    test('empty array', () => {
        const options = [] as const;

        const [next, idx] = toggle(options);

        expect(next).toBeNull();
        expect(idx).toBe(-1);

        expect(consoleSpy).toHaveBeenCalledOnce();
        expect(consoleSpy).toHaveBeenCalledWith(
            'Array has no options to toggle'
        );
    });
});
