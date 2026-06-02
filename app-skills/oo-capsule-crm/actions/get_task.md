# Capsule CRM · `get_task`

Read one Capsule CRM task by ID.

- **Service**: `capsule_crm`
- **Action**: `get_task`
- **Action id**: `capsule_crm.get_task`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "get_task"
```

## Run

```bash
oo connector run "capsule_crm" --action "get_task" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
