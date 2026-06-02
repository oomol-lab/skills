# Zoom · `add_meeting_registrant`

Register one participant for a Zoom meeting that has registration enabled.

- **Service**: `zoom`
- **Action**: `add_meeting_registrant`
- **Action id**: `zoom.add_meeting_registrant`
- **Required scopes**: meeting:write:registrant:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "add_meeting_registrant"
```

## Run

```bash
oo connector run "zoom" --action "add_meeting_registrant" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Zoom state. Confirm the exact payload and intended effect with the user before running.
