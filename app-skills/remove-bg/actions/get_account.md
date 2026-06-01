# remove.bg · `get_account`

Fetch the current remove.bg credit balance and free API call allowance for the authenticated account.

- **Service**: `remove_bg`
- **Action**: `get_account`
- **Action id**: `remove_bg.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "remove_bg" --action "get_account"
```

## Run

```bash
oo connector run "remove_bg" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
