# Monday · `list_audit_logs`

List account-level Monday audit logs on enterprise accounts.

- **Service**: `monday`
- **Action**: `list_audit_logs`
- **Action id**: `monday.list_audit_logs`
- **Required scopes**: manage_account_security

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_audit_logs"
```

## Run

```bash
oo connector run "monday" --action "list_audit_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
