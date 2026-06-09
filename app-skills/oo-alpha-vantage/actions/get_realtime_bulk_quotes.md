# Alpha Vantage · `get_realtime_bulk_quotes`

Retrieve raw realtime bulk quotes for up to 100 stock symbols.

- **Service**: `alpha_vantage`
- **Action**: `get_realtime_bulk_quotes`
- **Action id**: `alpha_vantage.get_realtime_bulk_quotes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alpha_vantage" --action "get_realtime_bulk_quotes"
```

## Run

```bash
oo connector run "alpha_vantage" --action "get_realtime_bulk_quotes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
