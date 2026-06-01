# Capsule CRM · `list_parties`

List Capsule CRM parties with pagination, optional change filtering, and embeds.

- **Service**: `capsule_crm`
- **Action**: `list_parties`
- **Action id**: `capsule_crm.list_parties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_parties"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_parties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
