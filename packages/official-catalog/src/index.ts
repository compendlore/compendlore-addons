export interface FoundationIdentity {
	readonly packageName: string;
	readonly description: string;
	readonly status: "foundation";
}

export const foundation: FoundationIdentity = Object.freeze({
	packageName: "@compendlore/official-addon-catalog",
	description: "Catalogue source des addons officiels",
	status: "foundation",
});
