import assert from "node:assert/strict";
import test from "node:test";
import { foundation } from "../packages/addon-template/build/index.js";

test("expose une fondation minimale", () => {
	assert.equal(foundation.packageName, "@compendlore/addon-template");
	assert.equal(foundation.status, "foundation");
});

test("fournit un addon de preuve entièrement déclaratif", async () => {
	const addon = await import("../packages/vertical-slice-proof/build/index.js");
	assert.equal(addon.manifest.identifier, "official.vertical-slice-proof");
	assert.equal(addon.tableContribution.schema.name, "official_vertical_slice_proof_notes");
	assert.equal(addon.methodContribution.method.transaction, "required");
	assert.equal(addon.nativeContentContribution.pages[0].route, "/proof-addon");
});
