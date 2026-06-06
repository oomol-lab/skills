# Personal AI · `upload_text_document`

Upload a text document to a Personal AI persona memory library.

- **Service**: `personal_ai`
- **Action**: `upload_text_document`
- **Action id**: `personal_ai.upload_text_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "personal_ai" --action "upload_text_document"
```

## Run

```bash
oo connector run "personal_ai" --action "upload_text_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Personal AI state. Confirm the exact payload and intended effect with the user before running.
