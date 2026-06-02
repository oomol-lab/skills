# Bolna · `get_user_info`

Get the authenticated Bolna workspace user, wallet, and concurrency summary.

- **Service**: `bolna`
- **Action**: `get_user_info`
- **Action id**: `bolna.get_user_info`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bolna" --action "get_user_info"
```

## Run

```bash
oo connector run "bolna" --action "get_user_info" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
