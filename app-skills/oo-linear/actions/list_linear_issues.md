# Linear · `list_linear_issues`

Lists Linear issues accessible with current credentials, and supports filtering by project and person in charge.

- **Service**: `linear`
- **Action**: `list_linear_issues`
- **Action id**: `linear.list_linear_issues`
- **Required scopes**: linear.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "list_linear_issues"
```

## Run

```bash
oo connector run "linear" --action "list_linear_issues" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
