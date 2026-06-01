# Twitter · `pin_list`

Pin an X List for the authenticated user account.

- **Service**: `twitter`
- **Action**: `pin_list`
- **Action id**: `twitter.pin_list`
- **Required scopes**: twitter.list.read, twitter.list.write, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "pin_list"
```

## Run

```bash
oo connector run "twitter" --action "pin_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
