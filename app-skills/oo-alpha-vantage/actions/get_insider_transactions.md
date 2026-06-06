# Alpha Vantage · `get_insider_transactions`

Retrieve raw insider transaction data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_insider_transactions`
- **Action id**: `alpha_vantage.get_insider_transactions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_insider_transactions"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_insider_transactions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
