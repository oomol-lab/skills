# Foxit Cloud API · `merge_documents`

Merge multiple PDF documents into a single PDF with Foxit.

- **Service**: `fuxin`
- **Action**: `merge_documents`
- **Action id**: `fuxin.merge_documents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "merge_documents"
```

## Run

```bash
oo connector run "fuxin" --action "merge_documents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Foxit Cloud API state. Confirm the exact payload and intended effect with the user before running.
