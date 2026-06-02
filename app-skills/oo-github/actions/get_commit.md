# GitHub · `get_commit`

Get a commit by SHA in a GitHub repository.

- **Service**: `github`
- **Action**: `get_commit`
- **Action id**: `github.get_commit`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_commit"
```

## Run

```bash
oo connector run "github" --action "get_commit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
