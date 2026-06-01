# Brevo · `list_contacts`

List Brevo contacts with pagination and timestamp filters.

- **Service**: `brevo`
- **Action**: `list_contacts`
- **Action id**: `brevo.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "list_contacts"
```

## Run

```bash
oo connector run "brevo" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
