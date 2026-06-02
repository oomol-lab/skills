# Recall.ai · `delete_bot_media`

Delete the Recall.ai media artifacts stored for a completed bot after downstream processing is finished.

- **Service**: `recallai`
- **Action**: `delete_bot_media`
- **Action id**: `recallai.delete_bot_media`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "recallai" --action "delete_bot_media"
```

## Run

```bash
oo connector run "recallai" --action "delete_bot_media" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Recall.ai data. Always confirm the target and get explicit user approval before running.
