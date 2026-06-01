# Vapi · `update_insight`

Update a Vapi insight by replacing its name, queries, formulas, grouping, and time range settings.

- **Service**: `vapi`
- **Action**: `update_insight`
- **Action id**: `vapi.update_insight`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "update_insight"
```

## Run

```bash
oo connector run "vapi" --action "update_insight" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Vapi state. Confirm the exact payload and intended effect with the user before running.
