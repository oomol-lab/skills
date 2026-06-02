# GitHub · `list_releases`

List releases for a GitHub repository.

- **Service**: `github`
- **Action**: `list_releases`
- **Action id**: `github.list_releases`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_releases"
```

## Run

```bash
oo connector run "github" --action "list_releases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
