# Short Menu · `create_link`

Create a Short Menu short link.

- **Service**: `short_menu`
- **Action**: `create_link`
- **Action id**: `short_menu.create_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_menu" --action "create_link"
```

## Run

```bash
oo connector run "short_menu" --action "create_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Short Menu state. Confirm the exact payload and intended effect with the user before running.
