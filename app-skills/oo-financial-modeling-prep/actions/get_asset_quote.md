# Financial Modeling Prep · `get_asset_quote`

Retrieve the latest quote for a commodity, cryptocurrency, forex pair, or index.

- **Service**: `financial_modeling_prep`
- **Action**: `get_asset_quote`
- **Action id**: `financial_modeling_prep.get_asset_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "financial_modeling_prep" --action "get_asset_quote"
```

## Run

```bash
oo connector run "financial_modeling_prep" --action "get_asset_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
