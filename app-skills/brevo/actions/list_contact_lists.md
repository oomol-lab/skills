# Brevo · `list_contact_lists`

List Brevo contact lists with the official pagination parameters.

- **Service**: `brevo`
- **Action**: `list_contact_lists`
- **Action id**: `brevo.list_contact_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "list_contact_lists"
```

## Run

```bash
oo connector run "brevo" --action "list_contact_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
