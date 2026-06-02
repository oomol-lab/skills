# Kraken.io · `get_user_status`

Fetch the current Kraken.io plan status and monthly optimization quota.

- **Service**: `kraken_io`
- **Action**: `get_user_status`
- **Action id**: `kraken_io.get_user_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kraken_io" --action "get_user_status"
```

## Run

```bash
oo connector run "kraken_io" --action "get_user_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
