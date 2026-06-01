# ElevenLabs · `get_history_item_by_id`

Get one ElevenLabs history item by history item ID without downloading its audio.

- **Service**: `elevenlabs`
- **Action**: `get_history_item_by_id`
- **Action id**: `elevenlabs.get_history_item_by_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_history_item_by_id"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_history_item_by_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
