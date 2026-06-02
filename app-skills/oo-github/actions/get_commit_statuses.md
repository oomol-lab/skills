# GitHub · `get_commit_statuses`

List statuses for a commit reference in reverse chronological order.

- **Service**: `github`
- **Action**: `get_commit_statuses`
- **Action id**: `github.get_commit_statuses`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "get_commit_statuses"
```

## Run

```bash
oo connector run "github" --action "get_commit_statuses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
