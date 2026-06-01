# Capsule CRM · `list_stages`

List stages for a Capsule CRM board.

- **Service**: `capsule_crm`
- **Action**: `list_stages`
- **Action id**: `capsule_crm.list_stages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_stages"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_stages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
