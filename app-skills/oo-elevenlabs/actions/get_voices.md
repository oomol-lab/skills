# ElevenLabs · `get_voices`

List the available ElevenLabs voices with their key metadata and settings.

- **Service**: `elevenlabs`
- **Action**: `get_voices`
- **Action id**: `elevenlabs.get_voices`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_voices"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_voices" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
