# Alpha Vantage · `get_global_quote`

Retrieve the latest end-of-day quote snapshot for a single stock symbol from Alpha Vantage.

- **Service**: `alpha_vantage`
- **Action**: `get_global_quote`
- **Action id**: `alpha_vantage.get_global_quote`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_global_quote"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_global_quote" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
