# lexoffice · `list_voucherlist`

List Lexoffice voucher metadata using the official voucherlist filters and paging.

- **Service**: `lexoffice`
- **Action**: `list_voucherlist`
- **Action id**: `lexoffice.list_voucherlist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "list_voucherlist"
```

## Run

```bash
oo connector run "lexoffice" --action "list_voucherlist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
