# Capsule CRM · `get_party`

Read one Capsule CRM party by ID.

- **Service**: `capsule_crm`
- **Action**: `get_party`
- **Action id**: `capsule_crm.get_party`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "get_party"
```

## Run

```bash
oo connector run "capsule_crm" --action "get_party" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
