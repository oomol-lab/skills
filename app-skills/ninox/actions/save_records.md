# Ninox · `save_records`

Create new Ninox records or update existing ones in the same table using the native POST /records endpoint.

- **Service**: `ninox`
- **Action**: `save_records`
- **Action id**: `ninox.save_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ninox" --action "save_records"
```

## Run

```bash
oo connector run "ninox" --action "save_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
