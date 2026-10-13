export const manifest = Object.freeze({
	identifier: "official.vertical-slice-proof",
	name: "Vertical slice proof",
	version: "1.0.0",
	apiLevel: "1",
	formatVersion: "1",
	capabilities: ["core.entities.use", "core.navigation.contribute", "core.pages.contribute"],
});

export const tableContribution = Object.freeze({
	contributionKey: "table.official.vertical-slice-proof.notes",
	owner: { kind: "addon", identifier: manifest.identifier },
	version: manifest.version,
	withdrawalPolicy: "delete",
	schema: {
		name: "official_vertical_slice_proof_notes",
		columns: [
			{ name: "id", type: "uuid", primary: true },
			{ name: "message", type: "text", nullable: false, length: 500 },
			{ name: "created_at", type: "timestamp", nullable: false },
		],
		indexes: [{ name: "created_at_idx", columns: ["created_at"] }],
	},
} as const);

export const methodContribution = Object.freeze({
	type: "method",
	identifier: "official.vertical-slice-proof.create-note",
	owner: { kind: "addon", identifier: manifest.identifier },
	version: manifest.version,
	withdrawalPolicy: "archive",
	replacementPolicy: "same-owner",
	method: {
		requiredCapability: "official.vertical-slice-proof.use",
		transaction: "required",
		timeoutMs: 1_000,
		idempotent: true,
	},
} as const);

export const nativeContentContribution = Object.freeze({
	contributionKey: "addon.official.vertical-slice-proof",
	owner: { kind: "addon", identifier: manifest.identifier },
	version: manifest.version,
	localizedResources: [
		{
			identifier: "official.vertical-slice-proof.page.title",
			namespace: "official.vertical-slice-proof.page",
			format: "plain",
			values: [
				{ locale: "en", value: "Proof addon" },
				{ locale: "fr-FR", value: "Addon de preuve" },
			],
		},
		{
			identifier: "official.vertical-slice-proof.entity.name",
			namespace: "official.vertical-slice-proof.entity",
			format: "plain",
			values: [
				{ locale: "en", value: "Proof note" },
				{ locale: "fr-FR", value: "Note de preuve" },
			],
		},
	],
	entityTypes: [
		{
			identifier: "official.proof-note",
			parentIdentifier: "entity",
			nameTextIdentifier: "official.vertical-slice-proof.entity.name",
			fields: [],
		},
	],
	navigationLinks: [
		{
			identifier: "official.vertical-slice-proof",
			mode: "route",
			target: "/proof-addon",
			titleTextIdentifier: "official.vertical-slice-proof.page.title",
			requiredCapabilities: ["official.vertical-slice-proof.use"],
		},
	],
	navigationItems: [
		{
			identifier: "official.vertical-slice-proof",
			position: "primary",
			linkIdentifier: "official.vertical-slice-proof",
			order: 900,
		},
	],
	pages: [
		{
			identifier: "official.vertical-slice-proof",
			route: "/proof-addon",
			surface: "site",
			titleTextIdentifier: "official.vertical-slice-proof.page.title",
			requiredCapabilities: ["official.vertical-slice-proof.use"],
			editable: false,
			removable: false,
		},
	],
} as const);
