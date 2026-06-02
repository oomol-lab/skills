# v0 · `get_chat`

Get a single v0 chat, including the current messages when v0 returns them.

- **Service**: `v0`
- **Action**: `get_chat`
- **Action id**: `v0.get_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_chat"
```

## Run

```bash
oo connector run "v0" --action "get_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
