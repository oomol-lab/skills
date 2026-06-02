# Ragie · `patch_document_metadata`

Patch Ragie document metadata in place without replacing the entire metadata object.

- **Service**: `ragie`
- **Action**: `patch_document_metadata`
- **Action id**: `ragie.patch_document_metadata`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "patch_document_metadata"
```

## Run

```bash
oo connector run "ragie" --action "patch_document_metadata" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Ragie state. Confirm the exact payload and intended effect with the user before running.
