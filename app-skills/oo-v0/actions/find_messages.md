# v0 · `find_messages`

List messages for a v0 chat.

- **Service**: `v0`
- **Action**: `find_messages`
- **Action id**: `v0.find_messages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "find_messages"
```

## Run

```bash
oo connector run "v0" --action "find_messages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
