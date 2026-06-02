# PandaDoc · `create_document_from_file`

Create a PandaDoc document from a public file URL, a transit file reference, or a local file upload.

- **Service**: `pandadoc`
- **Action**: `create_document_from_file`
- **Action id**: `pandadoc.create_document_from_file`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pandadoc" --action "create_document_from_file"
```

## Run

```bash
oo connector run "pandadoc" --action "create_document_from_file" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes PandaDoc state. Confirm the exact payload and intended effect with the user before running.
