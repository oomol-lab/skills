# Gitea · `search_repositories`

Search Gitea repositories by keyword with optional repository filters.

- **Service**: `gitea`
- **Action**: `search_repositories`
- **Action id**: `gitea.search_repositories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "search_repositories"
```

## Run

```bash
oo connector run "gitea" --action "search_repositories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
