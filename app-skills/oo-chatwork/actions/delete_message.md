# Chatwork · `delete_message`

Delete one message in a Chatwork room.

- **Service**: `chatwork`
- **Action**: `delete_message`
- **Action id**: `chatwork.delete_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "delete_message"
```

## Run

```bash
oo connector run "chatwork" --action "delete_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Chatwork data. Always confirm the target and get explicit user approval before running.
