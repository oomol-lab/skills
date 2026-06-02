# TiDB Cloud · `list_audit_logs`

List TiDB Cloud console audit logs for security and change tracking.

- **Service**: `tidb`
- **Action**: `list_audit_logs`
- **Action id**: `tidb.list_audit_logs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tidb" --action "list_audit_logs"
```

## Run

```bash
oo connector run "tidb" --action "list_audit_logs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
