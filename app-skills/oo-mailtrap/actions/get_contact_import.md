# Mailtrap · `get_contact_import`

Get one Mailtrap contact import job by ID.

- **Service**: `mailtrap`
- **Action**: `get_contact_import`
- **Action id**: `mailtrap.get_contact_import`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_contact_import"
```

## Run

```bash
oo connector run "mailtrap" --action "get_contact_import" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Mailtrap state. Confirm the exact payload and intended effect with the user before running.
