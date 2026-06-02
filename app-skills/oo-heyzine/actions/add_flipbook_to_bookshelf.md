# Heyzine · `add_flipbook_to_bookshelf`

Add a flipbook to a specific Heyzine bookshelf.

- **Service**: `heyzine`
- **Action**: `add_flipbook_to_bookshelf`
- **Action id**: `heyzine.add_flipbook_to_bookshelf`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "heyzine" --action "add_flipbook_to_bookshelf"
```

## Run

```bash
oo connector run "heyzine" --action "add_flipbook_to_bookshelf" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Heyzine state. Confirm the exact payload and intended effect with the user before running.
