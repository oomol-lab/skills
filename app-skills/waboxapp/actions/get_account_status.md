# waboxapp · `get_account_status`

Fetch the current Waboxapp account status for the connected WhatsApp number.

- **Service**: `waboxapp`
- **Action**: `get_account_status`
- **Action id**: `waboxapp.get_account_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "waboxapp" --action "get_account_status"
```

## Run

```bash
oo connector run "waboxapp" --action "get_account_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
