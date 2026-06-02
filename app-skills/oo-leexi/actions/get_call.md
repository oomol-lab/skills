# Leexi · `get_call`

Retrieve one Leexi call or meeting by UUID.

- **Service**: `leexi`
- **Action**: `get_call`
- **Action id**: `leexi.get_call`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "leexi" --action "get_call"
```

## Run

```bash
oo connector run "leexi" --action "get_call" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
