# Manus · `update_agent`

Update a Manus custom agent's display name or description.

- **Service**: `manus`
- **Action**: `update_agent`
- **Action id**: `manus.update_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "manus" --action "update_agent"
```

## Run

```bash
oo connector run "manus" --action "update_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Manus state. Confirm the exact payload and intended effect with the user before running.
