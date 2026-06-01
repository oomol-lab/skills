# Twitter · `delete_dm`

Delete a Direct Message event from the authenticated user account.

- **Service**: `twitter`
- **Action**: `delete_dm`
- **Action id**: `twitter.delete_dm`
- **Required scopes**: twitter.dm.write, twitter.dm.read, twitter.tweet.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "delete_dm"
```

## Run

```bash
oo connector run "twitter" --action "delete_dm" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Twitter data. Always confirm the target and get explicit user approval before running.
