# Capsule CRM · `get_opportunity`

Read one Capsule CRM opportunity by ID.

- **Service**: `capsule_crm`
- **Action**: `get_opportunity`
- **Action id**: `capsule_crm.get_opportunity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "get_opportunity"
```

## Run

```bash
oo connector run "capsule_crm" --action "get_opportunity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
