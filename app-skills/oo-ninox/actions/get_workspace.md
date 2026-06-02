# Ninox · `get_workspace`

Get one Ninox workspace by workspace ID.

- **Service**: `ninox`
- **Action**: `get_workspace`
- **Action id**: `ninox.get_workspace`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "get_workspace"
```

## Run

```bash
oo connector run "ninox" --action "get_workspace" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
