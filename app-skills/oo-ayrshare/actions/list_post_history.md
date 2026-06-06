# Ayrshare · `list_post_history`

List Ayrshare post history with optional filters for date range, status, type, and social platforms.

- **Service**: `ayrshare`
- **Action**: `list_post_history`
- **Action id**: `ayrshare.list_post_history`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ayrshare" --action "list_post_history"
```

## Run

```bash
oo connector run "ayrshare" --action "list_post_history" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ayrshare state. Confirm the exact payload and intended effect with the user before running.
