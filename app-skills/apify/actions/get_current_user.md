# Apify · `get_current_user`

Retrieve the currently authenticated Apify user account.

- **Service**: `apify`
- **Action**: `get_current_user`
- **Action id**: `apify.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apify" --action "get_current_user"
```

## Run

```bash
oo connector run "apify" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
