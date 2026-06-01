# RAWG · `list_publishers`

List game publishers from RAWG.

- **Service**: `rawg`
- **Action**: `list_publishers`
- **Action id**: `rawg.list_publishers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_publishers"
```

## Run

```bash
oo connector run "rawg" --action "list_publishers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
