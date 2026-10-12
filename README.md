# compendlore-addons

## English

Audited source code for official Compendlore addons and contribution templates.

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

### Docker

This repository does not yet provide a runtime service. Its `Dockerfile` exposes the `quality`
target used by the workspace command `make docker-test-addons`.

## Français

Sources auditées des addons officiels et gabarits de contribution.

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

### Docker

Le dépôt ne fournit pas encore de service d'exécution. Son `Dockerfile` expose donc uniquement la
cible `quality`, qui installe les dépendances et exécute toute la CI dans un environnement isolé.
Depuis la racine du workspace, utiliser `make docker-test-addons`.
