# NeverBounce · `get_account_info`

Get the current NeverBounce account credit summary and bulk job counters.

- **Service**: `neverbounce`
- **Action**: `get_account_info`
- **Action id**: `neverbounce.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "neverbounce" --action "get_account_info"
```

## Run

```bash
oo connector run "neverbounce" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
