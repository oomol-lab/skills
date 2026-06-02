# Beehiiv · `get_post`

Fetch one Beehiiv post by ID with optional statistics or content expansion.

- **Service**: `beehiiv`
- **Action**: `get_post`
- **Action id**: `beehiiv.get_post`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beehiiv" --action "get_post"
```

## Run

```bash
oo connector run "beehiiv" --action "get_post" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Beehiiv state. Confirm the exact payload and intended effect with the user before running.
