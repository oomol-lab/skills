# Chatwork · `get_room`

Get metadata for one Chatwork room.

- **Service**: `chatwork`
- **Action**: `get_room`
- **Action id**: `chatwork.get_room`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "get_room"
```

## Run

```bash
oo connector run "chatwork" --action "get_room" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
