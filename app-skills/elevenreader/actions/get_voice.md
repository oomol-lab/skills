# ElevenReader · `get_voice`

Get one ElevenLabs voice by voice ID before using it to read text aloud.

- **Service**: `elevenreader`
- **Action**: `get_voice`
- **Action id**: `elevenreader.get_voice`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenreader" --action "get_voice"
```

## Run

```bash
oo connector run "elevenreader" --action "get_voice" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
