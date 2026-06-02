# v0 · `create_chat`

Create a new v0 chat and immediately send the first message.

- **Service**: `v0`
- **Action**: `create_chat`
- **Action id**: `v0.create_chat`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "create_chat"
```

## Run

```bash
oo connector run "v0" --action "create_chat" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes v0 state. Confirm the exact payload and intended effect with the user before running.
