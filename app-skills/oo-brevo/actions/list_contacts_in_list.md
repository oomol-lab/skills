# Brevo · `list_contacts_in_list`

List the Brevo contacts currently linked to one Brevo contact list.

- **Service**: `brevo`
- **Action**: `list_contacts_in_list`
- **Action id**: `brevo.list_contacts_in_list`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brevo" --action "list_contacts_in_list"
```

## Run

```bash
oo connector run "brevo" --action "list_contacts_in_list" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
