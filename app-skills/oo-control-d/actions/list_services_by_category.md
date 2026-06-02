# Control D · `list_services_by_category`

List the Control D services available in one service category.

- **Service**: `control_d`
- **Action**: `list_services_by_category`
- **Action id**: `control_d.list_services_by_category`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "list_services_by_category"
```

## Run

```bash
oo connector run "control_d" --action "list_services_by_category" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
