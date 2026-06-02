# Needle · `list_collection_files`

List the files currently attached to a Needle collection.

- **Service**: `needle`
- **Action**: `list_collection_files`
- **Action id**: `needle.list_collection_files`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "needle" --action "list_collection_files"
```

## Run

```bash
oo connector run "needle" --action "list_collection_files" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
