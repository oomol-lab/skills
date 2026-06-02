# GitHub · `list_commits`

List commits in a GitHub repository with optional branch, path, author, and date filters.

- **Service**: `github`
- **Action**: `list_commits`
- **Action id**: `github.list_commits`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "list_commits"
```

## Run

```bash
oo connector run "github" --action "list_commits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
