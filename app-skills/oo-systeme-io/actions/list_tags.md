# Systeme.io · `list_tags`

List tags from Systeme.io with optional pagination.

- **Service**: `systeme_io`
- **Action**: `list_tags`
- **Action id**: `systeme_io.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "list_tags"
```

## Run

```bash
oo connector run "systeme_io" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
