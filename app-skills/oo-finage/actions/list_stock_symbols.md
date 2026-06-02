# Finage · `list_stock_symbols`

List Finage U.S. stock symbols with optional page and search filters.

- **Service**: `finage`
- **Action**: `list_stock_symbols`
- **Action id**: `finage.list_stock_symbols`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "finage" --action "list_stock_symbols"
```

## Run

```bash
oo connector run "finage" --action "list_stock_symbols" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
