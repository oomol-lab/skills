# Twelve Data · `forex_pairs`

List available forex pairs with base and quote currency metadata.

- **Service**: `twelve_data`
- **Action**: `forex_pairs`
- **Action id**: `twelve_data.forex_pairs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "forex_pairs"
```

## Run

```bash
oo connector run "twelve_data" --action "forex_pairs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
