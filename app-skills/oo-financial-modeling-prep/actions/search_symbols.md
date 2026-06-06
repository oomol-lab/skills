# Financial Modeling Prep · `search_symbols`

Search Financial Modeling Prep stock symbols by ticker fragment or company name.

- **Service**: `financial_modeling_prep`
- **Action**: `search_symbols`
- **Action id**: `financial_modeling_prep.search_symbols`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "search_symbols"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "search_symbols" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
