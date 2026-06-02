# You.com · `get_account_balance`

Get the remaining You.com credit balance for the API key account.

- **Service**: `you`
- **Action**: `get_account_balance`
- **Action id**: `you.get_account_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "you" --action "get_account_balance"
```

## Run

```bash
oo connector run "you" --action "get_account_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
