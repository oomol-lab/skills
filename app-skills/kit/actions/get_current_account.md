# Kit · `get_current_account`

Get the current Kit account and authenticated user details.

- **Service**: `kit`
- **Action**: `get_current_account`
- **Action id**: `kit.get_current_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "kit" --action "get_current_account"
```

## Run

```bash
oo connector run "kit" --action "get_current_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
