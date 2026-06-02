# Gmail · `delete_filter`

Permanently delete a Gmail filter by filter ID.

- **Service**: `gmail`
- **Action**: `delete_filter`
- **Action id**: `gmail.delete_filter`
- **Required scopes**: gmail.settings

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gmail" --action "delete_filter"
```

## Run

```bash
oo connector run "gmail" --action "delete_filter" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gmail data. Always confirm the target and get explicit user approval before running.
