# Vapi · `create_eval`

Create a Vapi eval for a mock conversation and define the checkpoint messages used to evaluate model behavior.

- **Service**: `vapi`
- **Action**: `create_eval`
- **Action id**: `vapi.create_eval`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_eval"
```

## Run

```bash
oo connector run "vapi" --action "create_eval" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
