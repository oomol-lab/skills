# Twitter · `update_list`

Update List attributes for a List owned by the authenticated user account.

- **Service**: `twitter`
- **Action**: `update_list`
- **Action id**: `twitter.update_list`
- **Required scopes**: twitter.list.read, twitter.list.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "update_list"
```

## Run

```bash
oo connector run "twitter" --action "update_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
