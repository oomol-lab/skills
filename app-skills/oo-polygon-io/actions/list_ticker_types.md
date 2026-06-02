# Massive (Polygon.io) · `list_ticker_types`

List ticker type codes supported by Polygon.io.

- **Service**: `polygon_io`
- **Action**: `list_ticker_types`
- **Action id**: `polygon_io.list_ticker_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "list_ticker_types"
```

## Run

```bash
oo connector run "polygon_io" --action "list_ticker_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
