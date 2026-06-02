# BetterContact · `get_account_balance`

Get BetterContact credits for the connected account email or an optional email override.

- **Service**: `bettercontact`
- **Action**: `get_account_balance`
- **Action id**: `bettercontact.get_account_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bettercontact" --action "get_account_balance"
```

## Run

```bash
oo connector run "bettercontact" --action "get_account_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
