# GitHub · `search_commits`

Search GitHub commits by commit-message text and qualifiers.

- **Service**: `github`
- **Action**: `search_commits`
- **Action id**: `github.search_commits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_commits"
```

## Run

```bash
oo connector run "github" --action "search_commits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
