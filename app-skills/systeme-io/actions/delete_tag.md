# Systeme.io · `delete_tag`

Delete a tag from Systeme.io.

- **Service**: `systeme_io`
- **Action**: `delete_tag`
- **Action id**: `systeme_io.delete_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "delete_tag"
```

## Run

```bash
oo connector run "systeme_io" --action "delete_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Systeme.io data. Always confirm the target and get explicit user approval before running.
