# RAWG · `get_publisher`

Get detailed information for one publisher from RAWG.

- **Service**: `rawg`
- **Action**: `get_publisher`
- **Action id**: `rawg.get_publisher`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "get_publisher"
```

## Run

```bash
oo connector run "rawg" --action "get_publisher" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
