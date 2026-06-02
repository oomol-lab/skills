# SunoAPI · `generate_midi`

Submit a SunoAPI MIDI task and return the task identifier.

- **Service**: `sunoapi`
- **Action**: `generate_midi`
- **Action id**: `sunoapi.generate_midi`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sunoapi" --action "generate_midi"
```

## Run

```bash
oo connector run "sunoapi" --action "generate_midi" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
