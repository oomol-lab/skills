# Formbricks · `get_me`

Get the Formbricks organization and workspace context associated with the current API key.

- **Service**: `formbricks`
- **Action**: `get_me`
- **Action id**: `formbricks.get_me`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "get_me"
```

## Run

```bash
oo connector run "formbricks" --action "get_me" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
