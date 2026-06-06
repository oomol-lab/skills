# Alpha Vantage · `get_commodity_data`

Retrieve raw commodity time series data from an Alpha Vantage commodity endpoint.

- **Service**: `alpha_vantage`
- **Action**: `get_commodity_data`
- **Action id**: `alpha_vantage.get_commodity_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_commodity_data"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_commodity_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
