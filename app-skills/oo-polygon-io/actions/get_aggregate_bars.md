# Massive (Polygon.io) · `get_aggregate_bars`

Get historical OHLC aggregate bars for a stock ticker over a custom range.

- **Service**: `polygon_io`
- **Action**: `get_aggregate_bars`
- **Action id**: `polygon_io.get_aggregate_bars`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "get_aggregate_bars"
```

## Run

```bash
oo connector run "polygon_io" --action "get_aggregate_bars" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
