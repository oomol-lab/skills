# Brevo · `remove_contacts_from_list`

Remove contacts from one Brevo contact list using exactly one official selector.

- **Service**: `brevo`
- **Action**: `remove_contacts_from_list`
- **Action id**: `brevo.remove_contacts_from_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "remove_contacts_from_list"
```

## Run

```bash
oo connector run "brevo" --action "remove_contacts_from_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Brevo data. Always confirm the target and get explicit user approval before running.
