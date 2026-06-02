# Twitter · `add_list_member`

Add a user account as a member of an X List.

- **Service**: `twitter`
- **Action**: `add_list_member`
- **Action id**: `twitter.add_list_member`
- **Required scopes**: twitter.list.read, twitter.list.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "add_list_member"
```

## Run

```bash
oo connector run "twitter" --action "add_list_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Twitter state. Confirm the exact payload and intended effect with the user before running.
