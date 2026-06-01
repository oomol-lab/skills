# Chatwork · `list_room_members`

List all members in one Chatwork room.

- **Service**: `chatwork`
- **Action**: `list_room_members`
- **Action id**: `chatwork.list_room_members`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "list_room_members"
```

## Run

```bash
oo connector run "chatwork" --action "list_room_members" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
