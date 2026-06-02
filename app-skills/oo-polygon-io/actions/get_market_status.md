# Massive (Polygon.io) · `get_market_status`

Get the current Polygon.io market status for stocks, currencies, and indices.

- **Service**: `polygon_io`
- **Action**: `get_market_status`
- **Action id**: `polygon_io.get_market_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "get_market_status"
```

## Run

```bash
oo connector run "polygon_io" --action "get_market_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
