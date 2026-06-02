# PandaDoc · `create_document_attachment`

Upload an attachment file to a draft PandaDoc document.

- **Service**: `pandadoc`
- **Action**: `create_document_attachment`
- **Action id**: `pandadoc.create_document_attachment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "create_document_attachment"
```

## Run

```bash
oo connector run "pandadoc" --action "create_document_attachment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PandaDoc state. Confirm the exact payload and intended effect with the user before running.
