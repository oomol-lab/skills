# Ragie · `delete_document`

Delete a Ragie document, optionally in asynchronous mode.

- **Service**: `ragie`
- **Action**: `delete_document`
- **Action id**: `ragie.delete_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ragie" --action "delete_document"
```

## Run

```bash
oo connector run "ragie" --action "delete_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Ragie data. Always confirm the target and get explicit user approval before running.
