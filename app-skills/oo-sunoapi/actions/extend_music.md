# SunoAPI · `extend_music`

Submit a SunoAPI music extension task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `extend_music`
- **Action id**: `sunoapi.extend_music`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "extend_music"
```

## Run

```bash
oo connector run "sunoapi" --action "extend_music" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
