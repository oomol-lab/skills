# Recall.ai · `get_bot`

Retrieve one Recall.ai bot by bot ID, including its current status changes, recordings, and metadata.

- **Service**: `recallai`
- **Action**: `get_bot`
- **Action id**: `recallai.get_bot`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "recallai" --action "get_bot"
```

## Run

```bash
oo connector run "recallai" --action "get_bot" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
