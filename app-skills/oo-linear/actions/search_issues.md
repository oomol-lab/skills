# Linear · `search_issues`

Retrieve issues through Linear's full-text search capabilities.

- **Service**: `linear`
- **Action**: `search_issues`
- **Action id**: `linear.search_issues`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "search_issues"
```

## Run

```bash
oo connector run "linear" --action "search_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
