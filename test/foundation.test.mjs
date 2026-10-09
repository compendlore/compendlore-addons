import assert from "node:assert/strict";
import test from "node:test";
import { foundation } from "../packages/addon-template/build/index.js";

test("expose une fondation minimale", () => {
	assert.equal(foundation.packageName, "@compendlore/addon-template");
	assert.equal(foundation.status, "foundation");
});
