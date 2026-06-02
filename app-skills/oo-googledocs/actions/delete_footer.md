# Google Docs · `delete_footer`

Delete a footer from a Google Docs document, including a section-specific footer when applicable.

- **Service**: `googledocs`
- **Action**: `delete_footer`
- **Action id**: `googledocs.delete_footer`
- **Required scopes**: googledocs.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googledocs" --action "delete_footer"
```

## Run

```bash
oo connector run "googledocs" --action "delete_footer" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Google Docs data. Always confirm the target and get explicit user approval before running.
