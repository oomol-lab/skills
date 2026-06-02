# Linear · `create_linear_comment`

Creates a comment for the specified Linear issue.

- **Service**: `linear`
- **Action**: `create_linear_comment`
- **Action id**: `linear.create_linear_comment`
- **Required scopes**: linear.comments.create

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "create_linear_comment"
```

## Run

```bash
oo connector run "linear" --action "create_linear_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
