# OpenAI · `create_image`

Generate images with the OpenAI image generation API.

- **Service**: `openai`
- **Action**: `create_image`
- **Action id**: `openai.create_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openai" --action "create_image"
```

## Run

```bash
oo connector run "openai" --action "create_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes OpenAI state. Confirm the exact payload and intended effect with the user before running.
