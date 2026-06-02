# Breeze · `list_tag_folders`

List Breeze tag folders.

- **Service**: `breeze`
- **Action**: `list_tag_folders`
- **Action id**: `breeze.list_tag_folders`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "breeze" --action "list_tag_folders"
```

## Run

```bash
oo connector run "breeze" --action "list_tag_folders" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
