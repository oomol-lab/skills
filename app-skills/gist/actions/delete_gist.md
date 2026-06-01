# Gist · `delete_gist`

Delete a GitHub gist.

- **Service**: `gist`
- **Action**: `delete_gist`
- **Action id**: `gist.delete_gist`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gist" --action "delete_gist"
```

## Run

```bash
oo connector run "gist" --action "delete_gist" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Gist data. Always confirm the target and get explicit user approval before running.
