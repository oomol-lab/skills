# Vimeo · `get_showcase`

Get metadata for a specific Vimeo showcase.

- **Service**: `vimeo`
- **Action**: `get_showcase`
- **Action id**: `vimeo.get_showcase`
- **Required scopes**: vimeo.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vimeo" --action "get_showcase"
```

## Run

```bash
oo connector run "vimeo" --action "get_showcase" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
