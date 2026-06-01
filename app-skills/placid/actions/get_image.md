# Placid · `get_image`

Get the current Placid image generation status for one image identifier and return the finished image URL when available.

- **Service**: `placid`
- **Action**: `get_image`
- **Action id**: `placid.get_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "placid" --action "get_image"
```

## Run

```bash
oo connector run "placid" --action "get_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
