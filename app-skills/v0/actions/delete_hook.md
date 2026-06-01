# v0 · `delete_hook`

Delete a webhook hook by hook ID.

- **Service**: `v0`
- **Action**: `delete_hook`
- **Action id**: `v0.delete_hook`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "v0" --action "delete_hook"
```

## Run

```bash
oo connector run "v0" --action "delete_hook" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites v0 data. Always confirm the target and get explicit user approval before running.
