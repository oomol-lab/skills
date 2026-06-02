# Linear · `create_linear_issue`

Create a new Linear issue in the specified team and support fields such as project, person in charge, status, label, etc.

- **Service**: `linear`
- **Action**: `create_linear_issue`
- **Action id**: `linear.create_linear_issue`
- **Required scopes**: linear.issues.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "create_linear_issue"
```

## Run

```bash
oo connector run "linear" --action "create_linear_issue" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
