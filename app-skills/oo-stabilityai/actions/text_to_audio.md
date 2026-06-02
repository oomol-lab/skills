# Stability AI · `text_to_audio`

Generate audio from a text prompt with Stability AI and upload the generated file to connector transit storage.

- **Service**: `stabilityai`
- **Action**: `text_to_audio`
- **Action id**: `stabilityai.text_to_audio`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "stabilityai" --action "text_to_audio"
```

## Run

```bash
oo connector run "stabilityai" --action "text_to_audio" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
