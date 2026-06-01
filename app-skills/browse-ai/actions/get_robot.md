# Browse AI · `get_robot`

Retrieve one Browse AI robot and its input parameter definitions by robot ID.

- **Service**: `browse_ai`
- **Action**: `get_robot`
- **Action id**: `browse_ai.get_robot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "browse_ai" --action "get_robot"
```

## Run

```bash
oo connector run "browse_ai" --action "get_robot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
