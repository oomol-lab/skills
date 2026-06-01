# Trello · `get_member`

Get a Trello member, defaulting to the authenticated member.

- **Service**: `trello`
- **Action**: `get_member`
- **Action id**: `trello.get_member`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "get_member"
```

## Run

```bash
oo connector run "trello" --action "get_member" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
