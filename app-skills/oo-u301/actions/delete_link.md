# U301 · `delete_link`

Delete one U301 short link by its domain/slug identifier.

- **Service**: `u301`
- **Action**: `delete_link`
- **Action id**: `u301.delete_link`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "u301" --action "delete_link"
```

## Run

```bash
oo connector run "u301" --action "delete_link" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites U301 data. Always confirm the target and get explicit user approval before running.
