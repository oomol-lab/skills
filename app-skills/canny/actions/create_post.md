# Canny · `create_post`

Create a new Canny post on a board for a specific author.

- **Service**: `canny`
- **Action**: `create_post`
- **Action id**: `canny.create_post`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "canny" --action "create_post"
```

## Run

```bash
oo connector run "canny" --action "create_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Canny state. Confirm the exact payload and intended effect with the user before running.
