# Vapi · `create_session`

Create a Vapi session with either an assistant identifier or an inline assistant configuration.

- **Service**: `vapi`
- **Action**: `create_session`
- **Action id**: `vapi.create_session`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_session"
```

## Run

```bash
oo connector run "vapi" --action "create_session" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
