# Alpha Vantage · `get_listing_status`

Retrieve raw active or delisted listing status data as CSV.

- **Service**: `alpha_vantage`
- **Action**: `get_listing_status`
- **Action id**: `alpha_vantage.get_listing_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_listing_status"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_listing_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
