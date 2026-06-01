# GTmetrix · `get_account_status`

Get the current GTmetrix account status, credits, and plan capabilities.

- **Service**: `gtmetrix`
- **Action**: `get_account_status`
- **Action id**: `gtmetrix.get_account_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_account_status"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_account_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
