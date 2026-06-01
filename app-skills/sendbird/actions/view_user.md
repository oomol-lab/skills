# Sendbird · `view_user`

Get a single Sendbird user by user ID.

- **Service**: `sendbird`
- **Action**: `view_user`
- **Action id**: `sendbird.view_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "view_user"
```

## Run

```bash
oo connector run "sendbird" --action "view_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
