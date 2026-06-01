# Short.io · `update_link`

Update an existing Short.io link by link ID.

- **Service**: `short_io`
- **Action**: `update_link`
- **Action id**: `short_io.update_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "update_link"
```

## Run

```bash
oo connector run "short_io" --action "update_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Short.io state. Confirm the exact payload and intended effect with the user before running.
