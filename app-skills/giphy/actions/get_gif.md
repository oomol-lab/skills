# GIPHY · `get_gif`

Get a GIPHY GIF by GIF Object id. This is not the random_id value.

- **Service**: `giphy`
- **Action**: `get_gif`
- **Action id**: `giphy.get_gif`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "giphy" --action "get_gif"
```

## Run

```bash
oo connector run "giphy" --action "get_gif" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
