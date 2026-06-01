# Agenty · `delete_agent`

Delete one Agenty agent by agent identifier.

- **Service**: `agenty`
- **Action**: `delete_agent`
- **Action id**: `agenty.delete_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "delete_agent"
```

## Run

```bash
oo connector run "agenty" --action "delete_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Agenty data. Always confirm the target and get explicit user approval before running.
