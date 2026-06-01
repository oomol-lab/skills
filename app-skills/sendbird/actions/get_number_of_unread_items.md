# Sendbird · `get_number_of_unread_items`

Get unread message, mention, and invitation counts for a Sendbird user.

- **Service**: `sendbird`
- **Action**: `get_number_of_unread_items`
- **Action id**: `sendbird.get_number_of_unread_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sendbird" --action "get_number_of_unread_items"
```

## Run

```bash
oo connector run "sendbird" --action "get_number_of_unread_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
