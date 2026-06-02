# Massive (Polygon.io) · `list_tickers`

List ticker symbols supported by Polygon.io with optional filters.

- **Service**: `polygon_io`
- **Action**: `list_tickers`
- **Action id**: `polygon_io.list_tickers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "list_tickers"
```

## Run

```bash
oo connector run "polygon_io" --action "list_tickers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
