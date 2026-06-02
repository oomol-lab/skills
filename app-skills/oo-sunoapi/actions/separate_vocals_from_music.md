# SunoAPI · `separate_vocals_from_music`

Separate vocals from music and return the submitted SunoAPI task identifier.

- **Service**: `sunoapi`
- **Action**: `separate_vocals_from_music`
- **Action id**: `sunoapi.separate_vocals_from_music`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "separate_vocals_from_music"
```

## Run

```bash
oo connector run "sunoapi" --action "separate_vocals_from_music" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
