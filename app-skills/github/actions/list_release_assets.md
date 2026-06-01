# GitHub · `list_release_assets`

List assets attached to a GitHub release.

- **Service**: `github`
- **Action**: `list_release_assets`
- **Action id**: `github.list_release_assets`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_release_assets"
```

## Run

```bash
oo connector run "github" --action "list_release_assets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
