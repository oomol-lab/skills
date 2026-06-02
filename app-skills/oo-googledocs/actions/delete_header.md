# Google Docs · `delete_header`

Delete a header from a Google Docs document, including a section-specific header when applicable.

- **Service**: `googledocs`
- **Action**: `delete_header`
- **Action id**: `googledocs.delete_header`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_header"
```

## Run

```bash
oo connector run "googledocs" --action "delete_header" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.
