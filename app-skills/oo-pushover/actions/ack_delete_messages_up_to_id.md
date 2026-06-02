# Pushover · `ack_delete_messages_up_to_id`

Acknowledge and delete all Open Client messages up to the provided message identifier.

- **Service**: `pushover`
- **Action**: `ack_delete_messages_up_to_id`
- **Action id**: `pushover.ack_delete_messages_up_to_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "ack_delete_messages_up_to_id"
```

## Run

```bash
oo connector run "pushover" --action "ack_delete_messages_up_to_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Pushover data. Always confirm the target and get explicit user approval before running.
