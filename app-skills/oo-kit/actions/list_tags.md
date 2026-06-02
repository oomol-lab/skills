# Kit · `list_tags`

List Kit tags with optional pagination.

- **Service**: `kit`
- **Action**: `list_tags`
- **Action id**: `kit.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "list_tags"
```

## Run

```bash
oo connector run "kit" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
