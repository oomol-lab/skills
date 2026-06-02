# HotspotSystem · `list_location_customers`

List HotspotSystem customers for one specific location.

- **Service**: `hotspotsystem`
- **Action**: `list_location_customers`
- **Action id**: `hotspotsystem.list_location_customers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hotspotsystem" --action "list_location_customers"
```

## Run

```bash
oo connector run "hotspotsystem" --action "list_location_customers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
