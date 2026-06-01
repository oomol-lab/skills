# Svix · `list_messages`

List messages that belong to a Svix application.

- **Service**: `svix`
- **Action**: `list_messages`
- **Action id**: `svix.list_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "svix" --action "list_messages"
```

## Run

```bash
oo connector run "svix" --action "list_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
