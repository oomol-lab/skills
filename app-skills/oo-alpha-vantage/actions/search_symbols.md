# Alpha Vantage · `search_symbols`

Search supported stocks, ETFs, and mutual funds by keyword and return the best matching symbols.

- **Service**: `alpha_vantage`
- **Action**: `search_symbols`
- **Action id**: `alpha_vantage.search_symbols`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "search_symbols"
```

## Run

```bash
oo connector run "alpha_vantage" --action "search_symbols" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
