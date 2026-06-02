# SunoAPI · `generate_sounds`

Submit a SunoAPI sounds task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `generate_sounds`
- **Action id**: `sunoapi.generate_sounds`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_sounds"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_sounds" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
