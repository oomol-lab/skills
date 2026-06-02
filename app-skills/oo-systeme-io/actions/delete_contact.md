# Systeme.io · `delete_contact`

Delete a contact from Systeme.io.

- **Service**: `systeme_io`
- **Action**: `delete_contact`
- **Action id**: `systeme_io.delete_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "delete_contact"
```

## Run

```bash
oo connector run "systeme_io" --action "delete_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Systeme.io data. Always confirm the target and get explicit user approval before running.
