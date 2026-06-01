# Chatwork · `get_message`

Get one message from a Chatwork room.

- **Service**: `chatwork`
- **Action**: `get_message`
- **Action id**: `chatwork.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "get_message"
```

## Run

```bash
oo connector run "chatwork" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
