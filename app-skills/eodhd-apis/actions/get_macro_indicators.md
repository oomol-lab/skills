# EODHD APIs · `get_macro_indicators`

Get macroeconomic indicator time series for a country from EODHD.

- **Service**: `eodhd_apis`
- **Action**: `get_macro_indicators`
- **Action id**: `eodhd_apis.get_macro_indicators`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "eodhd_apis" --action "get_macro_indicators"
```

## Run

```bash
oo connector run "eodhd_apis" --action "get_macro_indicators" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
