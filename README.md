# compendlore-addons

## English

Audited source code for official Compendlore addons and contribution templates.

This repository contains addons officially maintained by the Compendlore project. A contribution to
one of these addons is a project contribution governed by `CONTRIBUTING.md`; it is distinct from an
independent addon listed or sold on Compendlore Hub. Independent creators retain their rights in
their addons.

### Status

Foundation repository. No unaudited historical addon is included.

### Commands

- `npm run pretty`: format the repository;
- `npm run lint`: check code and repository documentation;
- `npm run typecheck`: run strict TypeScript checks;
- `npm run test`: build and execute tests;
- `npm run build`: produce a non-versioned local build;
- `npm run ci`: run the complete integration checks.

Local builds, packaged addons, secrets, runtime data, and workspace documentation are excluded from
Git.

The repository uses a proprietary source-available license draft, not an OSI-approved open-source
license. `CLA.md` remains inactive pending legal review.

### Docker

This repository does not yet provide a runtime service. Its `Dockerfile` exposes the `quality`
target used by the workspace command `make docker-test-addons`.

## Français

Sources auditées des addons officiels et gabarits de contribution.

Ce dépôt contient les addons officiellement maintenus par le projet Compendlore. Une contribution à
l’un de ces addons est une contribution au projet régie par `CONTRIBUTING.md` ; elle se distingue
d’un addon indépendant référencé ou vendu sur Compendlore Hub. Les créateurs indépendants conservent
leurs droits sur leurs addons.

### Statut

Fondation de phase 2. Aucun module historique non audité n'est présent.

### Commandes

- `npm run pretty` : formate le dépôt ;
- `npm run lint` : vérifie le code et la documentation ;
- `npm run typecheck` : vérifie TypeScript en mode strict ;
- `npm run test` : construit et exécute les tests ;
- `npm run build` : produit un build local non versionné ;
- `npm run ci` : exécute tous les contrôles d'intégration.

Les builds locaux, artefacts, secrets et données runtime sont exclus de Git.

Le dépôt utilise un projet de licence propriétaire à code source accessible, et non une licence open
source approuvée par l’OSI. `CLA.md` reste inactif dans l’attente d’une validation juridique.

### Docker

Le dépôt ne fournit pas encore de service d'exécution. Son `Dockerfile` expose donc uniquement la
cible `quality`, qui installe les dépendances et exécute toute la CI dans un environnement isolé.
Depuis la racine du workspace, utiliser `make docker-test-addons`.
