# Bolna · `get_execution`

Get one Bolna execution by execution_id.

- **Service**: `bolna`
- **Action**: `get_execution`
- **Action id**: `bolna.get_execution`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bolna" --action "get_execution"
```

## Run

```bash
oo connector run "bolna" --action "get_execution" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
