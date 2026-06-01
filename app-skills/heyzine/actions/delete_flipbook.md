# Heyzine · `delete_flipbook`

Delete a specific Heyzine flipbook.

- **Service**: `heyzine`
- **Action**: `delete_flipbook`
- **Action id**: `heyzine.delete_flipbook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "delete_flipbook"
```

## Run

```bash
oo connector run "heyzine" --action "delete_flipbook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Heyzine data. Always confirm the target and get explicit user approval before running.
