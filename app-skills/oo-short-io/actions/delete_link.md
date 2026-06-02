# Short.io · `delete_link`

Delete a Short.io link by link ID.

- **Service**: `short_io`
- **Action**: `delete_link`
- **Action id**: `short_io.delete_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "delete_link"
```

## Run

```bash
oo connector run "short_io" --action "delete_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Short.io data. Always confirm the target and get explicit user approval before running.
