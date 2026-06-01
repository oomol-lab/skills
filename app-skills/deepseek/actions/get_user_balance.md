# DeepSeek · `get_user_balance`

Get the current DeepSeek account balance.

- **Service**: `deepseek`
- **Action**: `get_user_balance`
- **Action id**: `deepseek.get_user_balance`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "deepseek" --action "get_user_balance"
```

## Run

```bash
oo connector run "deepseek" --action "get_user_balance" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
