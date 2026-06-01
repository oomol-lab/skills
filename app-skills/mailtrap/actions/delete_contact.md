# Mailtrap · `delete_contact`

Delete one Mailtrap contact by UUID or email.

- **Service**: `mailtrap`
- **Action**: `delete_contact`
- **Action id**: `mailtrap.delete_contact`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "delete_contact"
```

## Run

```bash
oo connector run "mailtrap" --action "delete_contact" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Mailtrap data. Always confirm the target and get explicit user approval before running.
