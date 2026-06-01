# Linear · `delete_linear_issue`

Delete the specified Linear issue.

- **Service**: `linear`
- **Action**: `delete_linear_issue`
- **Action id**: `linear.delete_linear_issue`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "delete_linear_issue"
```

## Run

```bash
oo connector run "linear" --action "delete_linear_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Linear data. Always confirm the target and get explicit user approval before running.
