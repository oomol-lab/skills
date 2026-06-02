# Vapi · `update_tool`

Update a Vapi tool configuration, including function definitions, HTTP request settings, and retry policies.

- **Service**: `vapi`
- **Action**: `update_tool`
- **Action id**: `vapi.update_tool`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "update_tool"
```

## Run

```bash
oo connector run "vapi" --action "update_tool" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
