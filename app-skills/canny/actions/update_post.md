# Canny · `update_post`

Update mutable fields on an existing Canny post.

- **Service**: `canny`
- **Action**: `update_post`
- **Action id**: `canny.update_post`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "update_post"
```

## Run

```bash
oo connector run "canny" --action "update_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canny state. Confirm the exact payload and intended effect with the user before running.
