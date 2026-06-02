# Twelve Data · `stocks`

List stock symbols and metadata from the Twelve Data stock catalog with optional filters.

- **Service**: `twelve_data`
- **Action**: `stocks`
- **Action id**: `twelve_data.stocks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "stocks"
```

## Run

```bash
oo connector run "twelve_data" --action "stocks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
