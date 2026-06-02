# GitHub · `list_repository_labels`

List labels available in a GitHub repository.

- **Service**: `github`
- **Action**: `list_repository_labels`
- **Action id**: `github.list_repository_labels`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_repository_labels"
```

## Run

```bash
oo connector run "github" --action "list_repository_labels" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
