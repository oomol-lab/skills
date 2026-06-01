# Capsule CRM · `list_currencies`

List currencies supported by Capsule CRM.

- **Service**: `capsule_crm`
- **Action**: `list_currencies`
- **Action id**: `capsule_crm.list_currencies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_currencies"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_currencies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
