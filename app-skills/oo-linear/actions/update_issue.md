# Linear · `update_issue`

Update an existing Linear issue and support fields such as title, description, status, project, label, etc.

- **Service**: `linear`
- **Action**: `update_issue`
- **Action id**: `linear.update_issue`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "update_issue"
```

## Run

```bash
oo connector run "linear" --action "update_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
