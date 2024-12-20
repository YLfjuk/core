import { serve } from '@hono/node-server';
import type { ExtractValues } from '@ylfjuk/core';
import { isDefined, noop } from '@ylfjuk/core';
import { Hono } from 'hono';

const app = new Hono();

const test: ExtractValues<{ bert: 'bert' }> = 'bert';

app.get('/', (c) => {
    const q = c.req.query();
    return c.json({
        bob: q.bob,
        test,
        isDef: isDefined(q.bob),
        noop: isDefined(noop('bob')),
    });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
    fetch: app.fetch,
    port,
});
