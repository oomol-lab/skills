# Linear · `create_comment_reaction`

Creates an emoji reaction for the specified Linear comment.

- **Service**: `linear`
- **Action**: `create_comment_reaction`
- **Action id**: `linear.create_comment_reaction`
- **Required scopes**: linear.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linear" --action "create_comment_reaction"
```

## Run

```bash
oo connector run "linear" --action "create_comment_reaction" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Linear state. Confirm the exact payload and intended effect with the user before running.
