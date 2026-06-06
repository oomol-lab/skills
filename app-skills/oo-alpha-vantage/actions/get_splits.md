# Alpha Vantage · `get_splits`

Retrieve raw historical split data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_splits`
- **Action id**: `alpha_vantage.get_splits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_splits"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_splits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
