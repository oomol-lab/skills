# Ragie · `create_document_from_url`

Create a Ragie document from a public URL when the source file is already hosted externally.

- **Service**: `ragie`
- **Action**: `create_document_from_url`
- **Action id**: `ragie.create_document_from_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "create_document_from_url"
```

## Run

```bash
oo connector run "ragie" --action "create_document_from_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.
