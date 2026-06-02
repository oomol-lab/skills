# GitHub · `get_repository`

Get metadata for a GitHub repository by owner and name.

- **Service**: `github`
- **Action**: `get_repository`
- **Action id**: `github.get_repository`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_repository"
```

## Run

```bash
oo connector run "github" --action "get_repository" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
