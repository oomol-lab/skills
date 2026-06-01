# HotspotSystem · `list_customers`

List HotspotSystem customers across all accessible locations.

- **Service**: `hotspotsystem`
- **Action**: `list_customers`
- **Action id**: `hotspotsystem.list_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "list_customers"
```

## Run

```bash
oo connector run "hotspotsystem" --action "list_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
