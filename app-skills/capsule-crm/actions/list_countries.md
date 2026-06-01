# Capsule CRM · `list_countries`

List countries supported by Capsule CRM.

- **Service**: `capsule_crm`
- **Action**: `list_countries`
- **Action id**: `capsule_crm.list_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_countries"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
