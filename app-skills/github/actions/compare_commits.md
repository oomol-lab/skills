# GitHub · `compare_commits`

Compare two commit references in a GitHub repository.

- **Service**: `github`
- **Action**: `compare_commits`
- **Action id**: `github.compare_commits`
- **Required scopes**: github.repo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "compare_commits"
```

## Run

```bash
oo connector run "github" --action "compare_commits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
