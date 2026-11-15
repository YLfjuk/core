---
"@ylfjuk-core/utils": patch
"@ylfjuk/core": patch
---

Correct JSON serialization and parsing return types. Stringify now accounts for quoted/escaped strings, replacers, and toJSON returning undefined. Check for undefined before using output from objects, functions, unknown inputs, or function replacers.

Parse and safeParse support string or null inputs; explicitly convert coercible tuples to strings before calling them. Exact inference is retained for booleans, null, and canonical integers with at most 15 decimal digits. Other parsed text returns unknown, and safeParse requires checking success. Narrow the parsed value or supply a result type only when independently guaranteed; a type argument does not validate a schema.

Failures from reviver calls now have reason unknown. Narrow it before reading error properties. The original thrown value is preserved, including undefined; a successful undefined root remains distinguishable by success.
