---
"@ylfjuk-core/types": patch
---

Publish generated `.d.ts` files instead of TypeScript source and remove the TypeScript peer dependency. Type exports are unchanged; consumers still need a compiler that supports the declaration syntax they use. The development source export remains available in the repository.
