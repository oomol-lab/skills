# Short Menu · `delete_link`

Delete an existing Short Menu short link.

- **Service**: `short_menu`
- **Action**: `delete_link`
- **Action id**: `short_menu.delete_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_menu" --action "delete_link"
```

## Run

```bash
oo connector run "short_menu" --action "delete_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Short Menu data. Always confirm the target and get explicit user approval before running.
