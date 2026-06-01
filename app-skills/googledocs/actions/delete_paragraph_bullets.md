# Google Docs · `delete_paragraph_bullets`

Remove bullets from paragraphs within a specified range in a Google Docs document.

- **Service**: `googledocs`
- **Action**: `delete_paragraph_bullets`
- **Action id**: `googledocs.delete_paragraph_bullets`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_paragraph_bullets"
```

## Run

```bash
oo connector run "googledocs" --action "delete_paragraph_bullets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.
