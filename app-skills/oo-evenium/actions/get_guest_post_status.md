# Evenium · `get_guest_post_status`

Get the current post-event attendance status for one Evenium guest.

- **Service**: `evenium`
- **Action**: `get_guest_post_status`
- **Action id**: `evenium.get_guest_post_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "evenium" --action "get_guest_post_status"
```

## Run

```bash
oo connector run "evenium" --action "get_guest_post_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Evenium state. Confirm the exact payload and intended effect with the user before running.
