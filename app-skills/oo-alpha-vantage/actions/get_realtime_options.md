# Alpha Vantage · `get_realtime_options`

Retrieve raw realtime options data for a stock symbol.

- **Service**: `alpha_vantage`
- **Action**: `get_realtime_options`
- **Action id**: `alpha_vantage.get_realtime_options`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_realtime_options"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_realtime_options" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
