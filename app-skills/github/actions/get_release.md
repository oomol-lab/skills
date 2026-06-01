# GitHub · `get_release`

Get a GitHub release by numeric id.

- **Service**: `github`
- **Action**: `get_release`
- **Action id**: `github.get_release`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_release"
```

## Run

```bash
oo connector run "github" --action "get_release" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
