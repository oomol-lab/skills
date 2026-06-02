# Longbridge · `list_account_cash`

List Longbridge account cash balances visible to the connected OAuth user.

- **Service**: `longbridge`
- **Action**: `list_account_cash`
- **Action id**: `longbridge.list_account_cash`
- **Required scopes**: longbridge.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "longbridge" --action "list_account_cash"
```

## Run

```bash
oo connector run "longbridge" --action "list_account_cash" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
