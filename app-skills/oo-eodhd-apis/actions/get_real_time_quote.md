# EODHD APIs · `get_real_time_quote`

Get delayed real-time quote data for one or more EODHD symbols.

- **Service**: `eodhd_apis`
- **Action**: `get_real_time_quote`
- **Action id**: `eodhd_apis.get_real_time_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "get_real_time_quote"
```

## Run

```bash
oo connector run "eodhd_apis" --action "get_real_time_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
