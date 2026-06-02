# Emailable · `get_account_info`

Retrieve Emailable account information including owner email and available credits.

- **Service**: `emailable`
- **Action**: `get_account_info`
- **Action id**: `emailable.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "emailable" --action "get_account_info"
```

## Run

```bash
oo connector run "emailable" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
