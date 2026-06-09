# Alpha Vantage · `get_sector_performance`

Retrieve raw realtime and historical sector performance data.

- **Service**: `alpha_vantage`
- **Action**: `get_sector_performance`
- **Action id**: `alpha_vantage.get_sector_performance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_sector_performance"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_sector_performance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
