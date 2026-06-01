# Recall.ai · `list_bots`

List Recall.ai bots with optional filters for scheduled date window, meeting URL, platform, status, metadata, and pagination.

- **Service**: `recallai`
- **Action**: `list_bots`
- **Action id**: `recallai.list_bots`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "recallai" --action "list_bots"
```

## Run

```bash
oo connector run "recallai" --action "list_bots" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
