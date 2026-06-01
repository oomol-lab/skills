# Twelve Data · `market_state`

List the current open or closed state of exchanges together with timing data.

- **Service**: `twelve_data`
- **Action**: `market_state`
- **Action id**: `twelve_data.market_state`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "market_state"
```

## Run

```bash
oo connector run "twelve_data" --action "market_state" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
