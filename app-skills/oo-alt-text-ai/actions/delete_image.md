# AltText.ai · `delete_image`

Delete an image from the AltText.ai library by asset ID.

- **Service**: `alt_text_ai`
- **Action**: `delete_image`
- **Action id**: `alt_text_ai.delete_image`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "alt_text_ai" --action "delete_image"
```

## Run

```bash
oo connector run "alt_text_ai" --action "delete_image" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites AltText.ai data. Always confirm the target and get explicit user approval before running.
