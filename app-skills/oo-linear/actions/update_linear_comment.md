# Linear · `update_linear_comment`

Update the text of an existing Linear comment.

- **Service**: `linear`
- **Action**: `update_linear_comment`
- **Action id**: `linear.update_linear_comment`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "update_linear_comment"
```

## Run

```bash
oo connector run "linear" --action "update_linear_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
