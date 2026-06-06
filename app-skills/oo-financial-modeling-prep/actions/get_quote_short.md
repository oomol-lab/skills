# Financial Modeling Prep · `get_quote_short`

Retrieve the latest compact quote for one stock symbol.

- **Service**: `financial_modeling_prep`
- **Action**: `get_quote_short`
- **Action id**: `financial_modeling_prep.get_quote_short`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_quote_short"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_quote_short" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
