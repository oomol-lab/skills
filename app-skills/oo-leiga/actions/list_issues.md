# Leiga · `list_issues`

List Leiga issues for one project using the official issue query body.

- **Service**: `leiga`
- **Action**: `list_issues`
- **Action id**: `leiga.list_issues`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leiga" --action "list_issues"
```

## Run

```bash
oo connector run "leiga" --action "list_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
