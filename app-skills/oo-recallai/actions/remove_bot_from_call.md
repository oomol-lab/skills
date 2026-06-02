# Recall.ai · `remove_bot_from_call`

Remove a Recall.ai bot from the meeting immediately when it is already active in the call.

- **Service**: `recallai`
- **Action**: `remove_bot_from_call`
- **Action id**: `recallai.remove_bot_from_call`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "recallai" --action "remove_bot_from_call"
```

## Run

```bash
oo connector run "recallai" --action "remove_bot_from_call" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Recall.ai data. Always confirm the target and get explicit user approval before running.
