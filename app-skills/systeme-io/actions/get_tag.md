# Systeme.io · `get_tag`

Get a single tag from Systeme.io by ID.

- **Service**: `systeme_io`
- **Action**: `get_tag`
- **Action id**: `systeme_io.get_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "get_tag"
```

## Run

```bash
oo connector run "systeme_io" --action "get_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
