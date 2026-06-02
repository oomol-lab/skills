# Twitter · `delete_list`

Delete a List owned by the authenticated user account.

- **Service**: `twitter`
- **Action**: `delete_list`
- **Action id**: `twitter.delete_list`
- **Required scopes**: twitter.list.read, twitter.list.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "delete_list"
```

## Run

```bash
oo connector run "twitter" --action "delete_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Twitter data. Always confirm the target and get explicit user approval before running.
