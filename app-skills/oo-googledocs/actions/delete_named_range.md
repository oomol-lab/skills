# Google Docs · `delete_named_range`

Delete a named range from a Google Docs document using a payload that identifies the range by ID or name.

- **Service**: `googledocs`
- **Action**: `delete_named_range`
- **Action id**: `googledocs.delete_named_range`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_named_range"
```

## Run

```bash
oo connector run "googledocs" --action "delete_named_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.
