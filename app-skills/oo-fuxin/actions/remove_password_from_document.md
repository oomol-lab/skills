# Foxit Cloud API · `remove_password_from_document`

Remove the password from one protected PDF with Foxit.

- **Service**: `fuxin`
- **Action**: `remove_password_from_document`
- **Action id**: `fuxin.remove_password_from_document`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "fuxin" --action "remove_password_from_document"
```

## Run

```bash
oo connector run "fuxin" --action "remove_password_from_document" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Foxit Cloud API data. Always confirm the target and get explicit user approval before running.
