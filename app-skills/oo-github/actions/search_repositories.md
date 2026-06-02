# GitHub · `search_repositories`

Search GitHub repositories with GitHub search syntax.

- **Service**: `github`
- **Action**: `search_repositories`
- **Action id**: `github.search_repositories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_repositories"
```

## Run

```bash
oo connector run "github" --action "search_repositories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
