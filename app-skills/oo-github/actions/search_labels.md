# GitHub · `search_labels`

Search labels within a GitHub repository by repository id and query.

- **Service**: `github`
- **Action**: `search_labels`
- **Action id**: `github.search_labels`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_labels"
```

## Run

```bash
oo connector run "github" --action "search_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
