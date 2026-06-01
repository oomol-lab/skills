# v0 · `get_message`

Get a single message from a v0 chat.

- **Service**: `v0`
- **Action**: `get_message`
- **Action id**: `v0.get_message`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "get_message"
```

## Run

```bash
oo connector run "v0" --action "get_message" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
