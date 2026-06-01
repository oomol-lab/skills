# Systeme.io · `delete_enrollment`

Remove a contact enrollment from a course in Systeme.io.

- **Service**: `systeme_io`
- **Action**: `delete_enrollment`
- **Action id**: `systeme_io.delete_enrollment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "delete_enrollment"
```

## Run

```bash
oo connector run "systeme_io" --action "delete_enrollment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Systeme.io data. Always confirm the target and get explicit user approval before running.
