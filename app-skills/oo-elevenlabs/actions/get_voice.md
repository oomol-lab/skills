# ElevenLabs · `get_voice`

Get one ElevenLabs voice by voice ID, with optional settings included.

- **Service**: `elevenlabs`
- **Action**: `get_voice`
- **Action id**: `elevenlabs.get_voice`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenlabs" --action "get_voice"
```

## Run

```bash
oo connector run "elevenlabs" --action "get_voice" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
