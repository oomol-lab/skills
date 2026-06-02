# Sendbird · `list_users`

List Sendbird users with common pagination and filtering controls.

- **Service**: `sendbird`
- **Action**: `list_users`
- **Action id**: `sendbird.list_users`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "list_users"
```

## Run

```bash
oo connector run "sendbird" --action "list_users" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
