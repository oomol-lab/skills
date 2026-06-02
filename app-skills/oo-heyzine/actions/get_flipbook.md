# Heyzine · `get_flipbook`

Get the details and oEmbed metadata for a specific Heyzine flipbook.

- **Service**: `heyzine`
- **Action**: `get_flipbook`
- **Action id**: `heyzine.get_flipbook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "get_flipbook"
```

## Run

```bash
oo connector run "heyzine" --action "get_flipbook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
