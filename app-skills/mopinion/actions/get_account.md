# Mopinion · `get_account`

Fetch the current Mopinion account profile and available account limits.

- **Service**: `mopinion`
- **Action**: `get_account`
- **Action id**: `mopinion.get_account`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "get_account"
```

## Run

```bash
oo connector run "mopinion" --action "get_account" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
