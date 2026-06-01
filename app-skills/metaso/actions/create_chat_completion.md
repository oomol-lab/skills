# Metaso · `create_chat_completion`

Create one non-streaming Metaso chat completion grounded by the requested Metaso scope.

- **Service**: `metaso`
- **Action**: `create_chat_completion`
- **Action id**: `metaso.create_chat_completion`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metaso" --action "create_chat_completion"
```

## Run

```bash
oo connector run "metaso" --action "create_chat_completion" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Metaso state. Confirm the exact payload and intended effect with the user before running.
