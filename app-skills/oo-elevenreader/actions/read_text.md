# ElevenReader · `read_text`

Convert text to speech with an ElevenLabs voice and upload the generated audio to connector transit storage.

- **Service**: `elevenreader`
- **Action**: `read_text`
- **Action id**: `elevenreader.read_text`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elevenreader" --action "read_text"
```

## Run

```bash
oo connector run "elevenreader" --action "read_text" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
