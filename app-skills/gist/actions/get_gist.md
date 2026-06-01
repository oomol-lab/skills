# Gist · `get_gist`

Get a GitHub gist by id.

- **Service**: `gist`
- **Action**: `get_gist`
- **Action id**: `gist.get_gist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "get_gist"
```

## Run

```bash
oo connector run "gist" --action "get_gist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
