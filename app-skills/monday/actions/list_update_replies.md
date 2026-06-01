# Monday · `list_update_replies`

List Monday replies for updates on one or more boards.

- **Service**: `monday`
- **Action**: `list_update_replies`
- **Action id**: `monday.list_update_replies`
- **Required scopes**: updates:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_update_replies"
```

## Run

```bash
oo connector run "monday" --action "list_update_replies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Monday state. Confirm the exact payload and intended effect with the user before running.
