# Control D · `list_service_categories`

List the Control D service categories that can be used for service discovery.

- **Service**: `control_d`
- **Action**: `list_service_categories`
- **Action id**: `control_d.list_service_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "control_d" --action "list_service_categories"
```

## Run

```bash
oo connector run "control_d" --action "list_service_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
