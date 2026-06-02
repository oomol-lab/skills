# Chatwork · `list_room_messages`

List messages in one Chatwork room.

- **Service**: `chatwork`
- **Action**: `list_room_messages`
- **Action id**: `chatwork.list_room_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "list_room_messages"
```

## Run

```bash
oo connector run "chatwork" --action "list_room_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
