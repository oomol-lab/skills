# Capsule CRM · `list_opportunities`

List Capsule CRM opportunities with pagination, optional change filtering, and embeds.

- **Service**: `capsule_crm`
- **Action**: `list_opportunities`
- **Action id**: `capsule_crm.list_opportunities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_opportunities"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_opportunities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
