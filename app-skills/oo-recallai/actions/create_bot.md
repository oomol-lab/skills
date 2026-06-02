# Recall.ai · `create_bot`

Create a Recall.ai bot with the core scheduling, recording, automatic-leave, and metadata fields needed for a first-pass meeting bot workflow.

- **Service**: `recallai`
- **Action**: `create_bot`
- **Action id**: `recallai.create_bot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "recallai" --action "create_bot"
```

## Run

```bash
oo connector run "recallai" --action "create_bot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Recall.ai state. Confirm the exact payload and intended effect with the user before running.
