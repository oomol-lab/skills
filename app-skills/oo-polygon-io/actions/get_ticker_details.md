# Massive (Polygon.io) · `get_ticker_details`

Get comprehensive details for a single Polygon.io ticker.

- **Service**: `polygon_io`
- **Action**: `get_ticker_details`
- **Action id**: `polygon_io.get_ticker_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "get_ticker_details"
```

## Run

```bash
oo connector run "polygon_io" --action "get_ticker_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
