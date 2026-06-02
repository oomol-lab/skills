# Monday · `duplicate_item`

Duplicate a Monday item.

- **Service**: `monday`
- **Action**: `duplicate_item`
- **Action id**: `monday.duplicate_item`
- **Required scopes**: boards:write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "duplicate_item"
```

## Run

```bash
oo connector run "monday" --action "duplicate_item" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
