# Zoom · `create_meeting`

Create a Zoom meeting for a user with the core official scheduling fields and first-pass settings.

- **Service**: `zoom`
- **Action**: `create_meeting`
- **Action id**: `zoom.create_meeting`
- **Required scopes**: meeting:write:meeting:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "create_meeting"
```

## Run

```bash
oo connector run "zoom" --action "create_meeting" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Zoom state. Confirm the exact payload and intended effect with the user before running.
