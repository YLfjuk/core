import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { unlinkSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const fixtures = [];

function pnpm(...args) {
	const result = spawnSync(process.execPath, [process.env.npm_execpath, ...args], {
		cwd: root,
		encoding: "utf8",
		timeout: 60_000,
		env: { ...process.env, NO_COLOR: "1", FORCE_COLOR: "0" },
	});
	assert.ifError(result.error);
	assert.equal(result.status, 1, result.stdout + result.stderr);
	return result.stdout + result.stderr;
}

try {
	for (const [name, directory] of [
		["types", "__tests__"],
		["utils", "__tests__"],
		["core", "tests"],
	]) {
		const filename = `${name}-typecheck-discovery-${randomUUID()}.spec.ts`;
		const path = new URL(`../packages/${name}/${directory}/${filename}`, import.meta.url);
		writeFileSync(
			path,
			'import { expectTypeOf, it } from "vitest";\nit("typecheck discovery", () => {\nexpectTypeOf<number>().toEqualTypeOf<string>();\n});\n',
			{ flag: "wx" },
		);
		fixtures.push({ filename, path });
		const output = pnpm("--dir", `packages/${name}`, "run", "test:types");
		assert.ok(output.includes(`${filename}(3,`) && output.includes("error TS2344"), output);
		console.log(`${name}: test:types rejected the invalid assertion`);
	}

	const output = pnpm("exec", "vitest", "run", ...fixtures.map(({ filename }) => filename));
	for (const { filename } of fixtures) {
		assert.match(
			output,
			new RegExp(`FAIL[^\n]*${filename.replaceAll(".", "\\.")}[^\n]*\r?\nTypeCheckError:`),
		);
	}
	console.log("Root Vitest rejected the invalid assertion in all three projects");
} finally {
	for (const { path } of fixtures) unlinkSync(path);
}
