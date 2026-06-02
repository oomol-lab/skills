# Trello · `list_member_boards`

List Trello boards visible to a member.

- **Service**: `trello`
- **Action**: `list_member_boards`
- **Action id**: `trello.list_member_boards`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "trello" --action "list_member_boards"
```

## Run

```bash
oo connector run "trello" --action "list_member_boards" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
