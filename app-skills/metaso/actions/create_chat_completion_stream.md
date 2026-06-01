# Metaso · `create_chat_completion_stream`

Consume a streamed Metaso chat completion and return the ordered chunks plus aggregated assistant content.

- **Service**: `metaso`
- **Action**: `create_chat_completion_stream`
- **Action id**: `metaso.create_chat_completion_stream`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "metaso" --action "create_chat_completion_stream"
```

## Run

```bash
oo connector run "metaso" --action "create_chat_completion_stream" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Metaso state. Confirm the exact payload and intended effect with the user before running.
