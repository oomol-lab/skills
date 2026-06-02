# Svix · `create_event_type`

Create or unarchive a Svix event type.

- **Service**: `svix`
- **Action**: `create_event_type`
- **Action id**: `svix.create_event_type`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "create_event_type"
```

## Run

```bash
oo connector run "svix" --action "create_event_type" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Svix state. Confirm the exact payload and intended effect with the user before running.
