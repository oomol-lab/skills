# Canny · `create_comment`

Create a new Canny comment on a post or as a reply to a comment.

- **Service**: `canny`
- **Action**: `create_comment`
- **Action id**: `canny.create_comment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "create_comment"
```

## Run

```bash
oo connector run "canny" --action "create_comment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canny state. Confirm the exact payload and intended effect with the user before running.
