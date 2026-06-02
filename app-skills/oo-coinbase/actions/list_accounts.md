# Coinbase · `list_accounts`

List Coinbase Advanced Trade brokerage accounts that the connected API key can access.

- **Service**: `coinbase`
- **Action**: `list_accounts`
- **Action id**: `coinbase.list_accounts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "coinbase" --action "list_accounts"
```

## Run

```bash
oo connector run "coinbase" --action "list_accounts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
