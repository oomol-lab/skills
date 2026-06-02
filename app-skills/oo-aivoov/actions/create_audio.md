# AiVOOV · `create_audio`

Generate base64 audio from one or more voice/text segments.

- **Service**: `aivoov`
- **Action**: `create_audio`
- **Action id**: `aivoov.create_audio`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "aivoov" --action "create_audio"
```

## Run

```bash
oo connector run "aivoov" --action "create_audio" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AiVOOV state. Confirm the exact payload and intended effect with the user before running.
