# Agenty · `copy_agent`

Clone one Agenty agent by agent identifier.

- **Service**: `agenty`
- **Action**: `copy_agent`
- **Action id**: `agenty.copy_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "copy_agent"
```

## Run

```bash
oo connector run "agenty" --action "copy_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Agenty state. Confirm the exact payload and intended effect with the user before running.
