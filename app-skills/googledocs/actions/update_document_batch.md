# Google Docs · `update_document_batch`

Apply raw Docs `batchUpdate` requests to a Google Docs document. This is the lower-level compatibility action for direct request arrays.

- **Service**: `googledocs`
- **Action**: `update_document_batch`
- **Action id**: `googledocs.update_document_batch`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "update_document_batch"
```

## Run

```bash
oo connector run "googledocs" --action "update_document_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Docs state. Confirm the exact payload and intended effect with the user before running.
