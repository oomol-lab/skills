# SunoAPI · `get_lyrics_generation_details`

Fetch SunoAPI lyrics generation details for a task.

- **Service**: `sunoapi`
- **Action**: `get_lyrics_generation_details`
- **Action id**: `sunoapi.get_lyrics_generation_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "get_lyrics_generation_details"
```

## Run

```bash
oo connector run "sunoapi" --action "get_lyrics_generation_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
