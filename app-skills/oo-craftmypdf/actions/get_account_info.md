# CraftMyPDF · `get_account_info`

Get the current CraftMyPDF account details resolved by the provided API key.

- **Service**: `craftmypdf`
- **Action**: `get_account_info`
- **Action id**: `craftmypdf.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "craftmypdf" --action "get_account_info"
```

## Run

```bash
oo connector run "craftmypdf" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
