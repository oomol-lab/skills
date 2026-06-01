# Zoom · `add_webinar_registrant`

Register one participant for a Zoom webinar that has registration enabled.

- **Service**: `zoom`
- **Action**: `add_webinar_registrant`
- **Action id**: `zoom.add_webinar_registrant`
- **Required scopes**: webinar:write:registrant:admin

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zoom" --action "add_webinar_registrant"
```

## Run

```bash
oo connector run "zoom" --action "add_webinar_registrant" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Zoom state. Confirm the exact payload and intended effect with the user before running.
