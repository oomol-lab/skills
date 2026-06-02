# Capsule CRM · `list_users`

List Capsule CRM users.

- **Service**: `capsule_crm`
- **Action**: `list_users`
- **Action id**: `capsule_crm.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "list_users"
```

## Run

```bash
oo connector run "capsule_crm" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
