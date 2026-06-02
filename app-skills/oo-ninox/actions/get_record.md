# Ninox · `get_record`

Get one Ninox record by record ID.

- **Service**: `ninox`
- **Action**: `get_record`
- **Action id**: `ninox.get_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "get_record"
```

## Run

```bash
oo connector run "ninox" --action "get_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
