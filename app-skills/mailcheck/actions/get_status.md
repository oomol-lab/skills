# Mailcheck · `get_status`

Retrieve UserCheck account information, plan details, and current API usage.

- **Service**: `mailcheck`
- **Action**: `get_status`
- **Action id**: `mailcheck.get_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailcheck" --action "get_status"
```

## Run

```bash
oo connector run "mailcheck" --action "get_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
