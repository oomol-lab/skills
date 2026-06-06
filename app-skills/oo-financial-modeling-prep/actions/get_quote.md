# Financial Modeling Prep · `get_quote`

Retrieve the latest quote for one stock symbol from Financial Modeling Prep.

- **Service**: `financial_modeling_prep`
- **Action**: `get_quote`
- **Action id**: `financial_modeling_prep.get_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_quote"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
