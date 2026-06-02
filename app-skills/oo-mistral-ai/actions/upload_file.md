# Mistral AI · `upload_file`

Upload files to Mistral for fine-tuning, batch or OCR.

- **Service**: `mistral_ai`
- **Action**: `upload_file`
- **Action id**: `mistral_ai.upload_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mistral_ai" --action "upload_file"
```

## Run

```bash
oo connector run "mistral_ai" --action "upload_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mistral AI state. Confirm the exact payload and intended effect with the user before running.
