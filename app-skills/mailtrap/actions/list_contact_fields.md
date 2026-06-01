# Mailtrap · `list_contact_fields`

List Mailtrap contact fields.

- **Service**: `mailtrap`
- **Action**: `list_contact_fields`
- **Action id**: `mailtrap.list_contact_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_contact_fields"
```

## Run

```bash
oo connector run "mailtrap" --action "list_contact_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
