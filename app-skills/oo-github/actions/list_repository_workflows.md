# GitHub · `list_repository_workflows`

List workflows configured in a GitHub repository.

- **Service**: `github`
- **Action**: `list_repository_workflows`
- **Action id**: `github.list_repository_workflows`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_repository_workflows"
```

## Run

```bash
oo connector run "github" --action "list_repository_workflows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
