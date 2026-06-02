# Docsumo · `get_account_info`

Get Docsumo account details, monthly document quota usage, and the currently enabled document types.

- **Service**: `docsumo`
- **Action**: `get_account_info`
- **Action id**: `docsumo.get_account_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docsumo" --action "get_account_info"
```

## Run

```bash
oo connector run "docsumo" --action "get_account_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
