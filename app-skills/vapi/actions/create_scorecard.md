# Vapi · `create_scorecard`

Create a Vapi scorecard for observability and evaluation using structured output metrics and conditions.

- **Service**: `vapi`
- **Action**: `create_scorecard`
- **Action id**: `vapi.create_scorecard`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "create_scorecard"
```

## Run

```bash
oo connector run "vapi" --action "create_scorecard" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
