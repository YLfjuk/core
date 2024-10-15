import { describe, expect, it, vi } from 'vitest';
import { assertNever, noop } from '../../src';

describe('Function that asserts a value has not reached it', () => {
    it('throw', () => {
        expect(assertNever).toThrowError();
    });

    it('silent', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(noop);

        assertNever.silent();

        expect(consoleSpy).toHaveBeenCalledOnce();

        consoleSpy.mockRestore();
    });
});
