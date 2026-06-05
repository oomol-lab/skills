# AltText.ai · `create_image`

Add a publicly accessible image URL to AltText.ai and generate alt text.

- **Service**: `alt_text_ai`
- **Action**: `create_image`
- **Action id**: `alt_text_ai.create_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alt_text_ai" --action "create_image"
```

## Run

```bash
oo connector run "alt_text_ai" --action "create_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AltText.ai state. Confirm the exact payload and intended effect with the user before running.
