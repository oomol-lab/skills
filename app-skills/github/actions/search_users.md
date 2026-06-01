# GitHub · `search_users`

Search GitHub users with GitHub search syntax.

- **Service**: `github`
- **Action**: `search_users`
- **Action id**: `github.search_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_users"
```

## Run

```bash
oo connector run "github" --action "search_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
