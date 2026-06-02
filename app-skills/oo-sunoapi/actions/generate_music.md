# SunoAPI · `generate_music`

Submit a SunoAPI music generation task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `generate_music`
- **Action id**: `sunoapi.generate_music`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_music"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_music" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
