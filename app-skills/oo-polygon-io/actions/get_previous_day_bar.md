# Massive (Polygon.io) · `get_previous_day_bar`

Get the previous trading day's OHLC aggregate bar for a stock ticker.

- **Service**: `polygon_io`
- **Action**: `get_previous_day_bar`
- **Action id**: `polygon_io.get_previous_day_bar`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "get_previous_day_bar"
```

## Run

```bash
oo connector run "polygon_io" --action "get_previous_day_bar" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
