# EODHD APIs · `search_instruments`

Search EODHD instruments by ticker, company name, or ISIN.

- **Service**: `eodhd_apis`
- **Action**: `search_instruments`
- **Action id**: `eodhd_apis.search_instruments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "search_instruments"
```

## Run

```bash
oo connector run "eodhd_apis" --action "search_instruments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
