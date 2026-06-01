# ElevenReader · `get_models`

List available ElevenLabs speech synthesis models for reading text aloud.

- **Service**: `elevenreader`
- **Action**: `get_models`
- **Action id**: `elevenreader.get_models`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenreader" --action "get_models"
```

## Run

```bash
oo connector run "elevenreader" --action "get_models" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
