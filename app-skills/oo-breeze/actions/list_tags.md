# Breeze · `list_tags`

List Breeze tags, optionally narrowed to one Breeze tag folder.

- **Service**: `breeze`
- **Action**: `list_tags`
- **Action id**: `breeze.list_tags`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "breeze" --action "list_tags"
```

## Run

```bash
oo connector run "breeze" --action "list_tags" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
