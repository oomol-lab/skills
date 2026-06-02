# Mailtrap · `get_contact_export`

Get one Mailtrap contact export job by ID.

- **Service**: `mailtrap`
- **Action**: `get_contact_export`
- **Action id**: `mailtrap.get_contact_export`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "get_contact_export"
```

## Run

```bash
oo connector run "mailtrap" --action "get_contact_export" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
