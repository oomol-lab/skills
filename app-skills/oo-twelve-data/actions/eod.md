# Twelve Data · `eod`

Fetch the end-of-day close price for a specific instrument.

- **Service**: `twelve_data`
- **Action**: `eod`
- **Action id**: `twelve_data.eod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "eod"
```

## Run

```bash
oo connector run "twelve_data" --action "eod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
