# Capsule CRM · `get_current_user`

Read the Capsule CRM user associated with the access token.

- **Service**: `capsule_crm`
- **Action**: `get_current_user`
- **Action id**: `capsule_crm.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "capsule_crm" --action "get_current_user"
```

## Run

```bash
oo connector run "capsule_crm" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
