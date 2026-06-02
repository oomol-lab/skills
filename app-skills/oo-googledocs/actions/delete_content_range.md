# Google Docs · `delete_content_range`

Delete a content range from a Google Docs document. The trailing newline at the end of each segment cannot be removed.

- **Service**: `googledocs`
- **Action**: `delete_content_range`
- **Action id**: `googledocs.delete_content_range`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_content_range"
```

## Run

```bash
oo connector run "googledocs" --action "delete_content_range" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.
