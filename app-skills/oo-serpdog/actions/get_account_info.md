# Serpdog · `get_account_info`

Retrieve account details and quota usage for the connected Serpdog API key.

- **Service**: `serpdog`
- **Action**: `get_account_info`
- **Action id**: `serpdog.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "serpdog" --action "get_account_info"
```

## Run

```bash
oo connector run "serpdog" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
