# Twelve Data · `price`

Fetch the latest available market price for a specific instrument.

- **Service**: `twelve_data`
- **Action**: `price`
- **Action id**: `twelve_data.price`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "price"
```

## Run

```bash
oo connector run "twelve_data" --action "price" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
