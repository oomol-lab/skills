# Twelve Data · `symbol_search`

Search financial instruments by symbol or name and return the most relevant matches.

- **Service**: `twelve_data`
- **Action**: `symbol_search`
- **Action id**: `twelve_data.symbol_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twelve_data" --action "symbol_search"
```

## Run

```bash
oo connector run "twelve_data" --action "symbol_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
