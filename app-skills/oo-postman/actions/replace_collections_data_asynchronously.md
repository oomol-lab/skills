# Postman · `replace_collections_data_asynchronously`

Tool to replace the entire contents of a collection asynchronously. Use when you need to completely replace a collection with new data. IMPORTANT: Include the collection's ID values in item, variable, and other nested objects to preserve them. If you do not include IDs, existing items will be removed and new items will be created.

- **Service**: `postman`
- **Action**: `replace_collections_data_asynchronously`
- **Action id**: `postman.replace_collections_data_asynchronously`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "replace_collections_data_asynchronously"
```

## Run

```bash
oo connector run "postman" --action "replace_collections_data_asynchronously" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Postman state. Confirm the exact payload and intended effect with the user before running.
