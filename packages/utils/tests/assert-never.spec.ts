import { describe, expect, it, vi } from 'vitest';
import { assertNever } from '../src/assert-never';
import { noop } from '../src/noop';

describe('Function that asserts a value has not reached it', () => {
    it('should throw', () => {
        expect(assertNever).toThrowError();
    });

    it('should error silently', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(noop);

        assertNever.silent();

        expect(consoleSpy).toHaveBeenCalledOnce();

        consoleSpy.mockRestore();
    });
});
