# EODHD APIs · `get_ust_yield_rates`

Get US Treasury yield curve rates from EODHD.

- **Service**: `eodhd_apis`
- **Action**: `get_ust_yield_rates`
- **Action id**: `eodhd_apis.get_ust_yield_rates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "get_ust_yield_rates"
```

## Run

```bash
oo connector run "eodhd_apis" --action "get_ust_yield_rates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
