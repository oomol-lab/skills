# Chatwork · `list_rooms`

List Chatwork rooms visible to the authenticated account.

- **Service**: `chatwork`
- **Action**: `list_rooms`
- **Action id**: `chatwork.list_rooms`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "chatwork" --action "list_rooms"
```

## Run

```bash
oo connector run "chatwork" --action "list_rooms" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
