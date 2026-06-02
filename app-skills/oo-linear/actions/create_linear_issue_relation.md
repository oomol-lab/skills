# Linear · `create_linear_issue_relation`

Create a relationship between two Linear issues, such as blocks, related, or duplicate.

- **Service**: `linear`
- **Action**: `create_linear_issue_relation`
- **Action id**: `linear.create_linear_issue_relation`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "create_linear_issue_relation"
```

## Run

```bash
oo connector run "linear" --action "create_linear_issue_relation" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
