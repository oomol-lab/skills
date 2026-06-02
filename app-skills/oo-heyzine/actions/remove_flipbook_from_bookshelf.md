# Heyzine · `remove_flipbook_from_bookshelf`

Remove a flipbook from a specific Heyzine bookshelf.

- **Service**: `heyzine`
- **Action**: `remove_flipbook_from_bookshelf`
- **Action id**: `heyzine.remove_flipbook_from_bookshelf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "remove_flipbook_from_bookshelf"
```

## Run

```bash
oo connector run "heyzine" --action "remove_flipbook_from_bookshelf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Heyzine data. Always confirm the target and get explicit user approval before running.
