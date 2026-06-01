# Gmail · `delete_draft`

Permanently delete a Gmail draft by draft ID instead of sending it.

- **Service**: `gmail`
- **Action**: `delete_draft`
- **Action id**: `gmail.delete_draft`
- **Required scopes**: gmail.compose

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "delete_draft"
```

## Run

```bash
oo connector run "gmail" --action "delete_draft" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gmail data. Always confirm the target and get explicit user approval before running.
