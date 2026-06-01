# Capsule CRM · `list_categories`

List Capsule CRM task categories.

- **Service**: `capsule_crm`
- **Action**: `list_categories`
- **Action id**: `capsule_crm.list_categories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_categories"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_categories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
