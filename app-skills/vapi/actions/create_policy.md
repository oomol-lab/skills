# Vapi · `create_policy`

Create a Vapi monitoring policy with severity, threshold, and schedule or interval configuration.

- **Service**: `vapi`
- **Action**: `create_policy`
- **Action id**: `vapi.create_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_policy"
```

## Run

```bash
oo connector run "vapi" --action "create_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
