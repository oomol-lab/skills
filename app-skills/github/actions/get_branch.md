# GitHub · `get_branch`

Get a GitHub branch by name.

- **Service**: `github`
- **Action**: `get_branch`
- **Action id**: `github.get_branch`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_branch"
```

## Run

```bash
oo connector run "github" --action "get_branch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
