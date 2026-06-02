# Apify · `get_dataset_items`

Retrieve JSON items from one Apify dataset.

- **Service**: `apify`
- **Action**: `get_dataset_items`
- **Action id**: `apify.get_dataset_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apify" --action "get_dataset_items"
```

## Run

```bash
oo connector run "apify" --action "get_dataset_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
