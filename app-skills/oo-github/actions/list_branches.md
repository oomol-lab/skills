# GitHub · `list_branches`

List branches in a GitHub repository.

- **Service**: `github`
- **Action**: `list_branches`
- **Action id**: `github.list_branches`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_branches"
```

## Run

```bash
oo connector run "github" --action "list_branches" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
