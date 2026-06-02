# Gitea · `get_repository`

Get metadata for a Gitea repository by owner and name.

- **Service**: `gitea`
- **Action**: `get_repository`
- **Action id**: `gitea.get_repository`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gitea" --action "get_repository"
```

## Run

```bash
oo connector run "gitea" --action "get_repository" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
