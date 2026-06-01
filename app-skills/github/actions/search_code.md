# GitHub · `search_code`

Search GitHub code with GitHub search syntax.

- **Service**: `github`
- **Action**: `search_code`
- **Action id**: `github.search_code`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "github" --action "search_code"
```

## Run

```bash
oo connector run "github" --action "search_code" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
