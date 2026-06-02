# Linear · `remove_issue_label`

Removes a label from the specified Linear issue.

- **Service**: `linear`
- **Action**: `remove_issue_label`
- **Action id**: `linear.remove_issue_label`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "remove_issue_label"
```

## Run

```bash
oo connector run "linear" --action "remove_issue_label" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Linear data. Always confirm the target and get explicit user approval before running.
