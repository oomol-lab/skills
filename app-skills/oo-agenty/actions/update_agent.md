# Agenty · `update_agent`

Update one Agenty agent by agent identifier.

- **Service**: `agenty`
- **Action**: `update_agent`
- **Action id**: `agenty.update_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "update_agent"
```

## Run

```bash
oo connector run "agenty" --action "update_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Agenty state. Confirm the exact payload and intended effect with the user before running.
