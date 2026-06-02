# Massive (Polygon.io) · `list_exchanges`

List known exchanges available through Polygon.io.

- **Service**: `polygon_io`
- **Action**: `list_exchanges`
- **Action id**: `polygon_io.list_exchanges`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "polygon_io" --action "list_exchanges"
```

## Run

```bash
oo connector run "polygon_io" --action "list_exchanges" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
