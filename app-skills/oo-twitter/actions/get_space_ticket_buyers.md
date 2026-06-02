# Twitter · `get_space_ticket_buyers`

Get ticket buyers for a ticketed X Space.

- **Service**: `twitter`
- **Action**: `get_space_ticket_buyers`
- **Action id**: `twitter.get_space_ticket_buyers`
- **Required scopes**: twitter.space.read, twitter.users.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "get_space_ticket_buyers"
```

## Run

```bash
oo connector run "twitter" --action "get_space_ticket_buyers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
