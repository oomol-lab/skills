# Twitter · `remove_list_member`

Remove a user account from an X List.

- **Service**: `twitter`
- **Action**: `remove_list_member`
- **Action id**: `twitter.remove_list_member`
- **Required scopes**: twitter.list.read, twitter.list.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "remove_list_member"
```

## Run

```bash
oo connector run "twitter" --action "remove_list_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Twitter data. Always confirm the target and get explicit user approval before running.
