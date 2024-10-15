import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
    minify: !options.watch,
    entry: ['src/index.ts'],
    target: 'es2020',
    sourcemap: true,
    dts: true,
    shims: true,
    injectStyle: true,
    format: ['esm', 'cjs'],
}));
