# Outline · `get_document`

Retrieve one Outline document by UUID or urlId, or by shareId when reading through a share link context.

- **Service**: `outline`
- **Action**: `get_document`
- **Action id**: `outline.get_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "outline" --action "get_document"
```

## Run

```bash
oo connector run "outline" --action "get_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
