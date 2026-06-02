# Capsule CRM · `list_tasks`

List Capsule CRM tasks with pagination, status filtering, and embeds.

- **Service**: `capsule_crm`
- **Action**: `list_tasks`
- **Action id**: `capsule_crm.list_tasks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_tasks"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_tasks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
