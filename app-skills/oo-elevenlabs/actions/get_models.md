# ElevenLabs · `get_models`

List the available ElevenLabs models and their text-to-speech capabilities.

- **Service**: `elevenlabs`
- **Action**: `get_models`
- **Action id**: `elevenlabs.get_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_models"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
