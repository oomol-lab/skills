# Quo · `list_messages`

List messages exchanged between a Quo number and conversation participants.

- **Service**: `quo`
- **Action**: `list_messages`
- **Action id**: `quo.list_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "list_messages"
```

## Run

```bash
oo connector run "quo" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
