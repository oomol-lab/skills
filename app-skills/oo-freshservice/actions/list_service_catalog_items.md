# Freshservice · `list_service_catalog_items`

List Freshservice service catalog items so callers can discover item display IDs before placing requests.

- **Service**: `freshservice`
- **Action**: `list_service_catalog_items`
- **Action id**: `freshservice.list_service_catalog_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshservice" --action "list_service_catalog_items"
```

## Run

```bash
oo connector run "freshservice" --action "list_service_catalog_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
