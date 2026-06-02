# RAWG · `list_platforms`

List gaming platforms from RAWG.

- **Service**: `rawg`
- **Action**: `list_platforms`
- **Action id**: `rawg.list_platforms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "rawg" --action "list_platforms"
```

## Run

```bash
oo connector run "rawg" --action "list_platforms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
