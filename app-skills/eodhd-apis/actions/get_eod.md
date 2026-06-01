# EODHD APIs · `get_eod`

Get historical end-of-day price data for an EODHD ticker.

- **Service**: `eodhd_apis`
- **Action**: `get_eod`
- **Action id**: `eodhd_apis.get_eod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "get_eod"
```

## Run

```bash
oo connector run "eodhd_apis" --action "get_eod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
