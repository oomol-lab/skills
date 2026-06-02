# Headout · `list_inventory_by_variant`

List Headout inventory rows for one variant.

- **Service**: `headout`
- **Action**: `list_inventory_by_variant`
- **Action id**: `headout.list_inventory_by_variant`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "headout" --action "list_inventory_by_variant"
```

## Run

```bash
oo connector run "headout" --action "list_inventory_by_variant" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
