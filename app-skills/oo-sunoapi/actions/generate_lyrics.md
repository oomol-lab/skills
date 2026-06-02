# SunoAPI · `generate_lyrics`

Submit a SunoAPI lyrics generation task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `generate_lyrics`
- **Action id**: `sunoapi.generate_lyrics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_lyrics"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_lyrics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
