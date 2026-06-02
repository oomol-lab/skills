# GitHub · `get_release_by_tag`

Get a GitHub release by tag name.

- **Service**: `github`
- **Action**: `get_release_by_tag`
- **Action id**: `github.get_release_by_tag`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_release_by_tag"
```

## Run

```bash
oo connector run "github" --action "get_release_by_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
