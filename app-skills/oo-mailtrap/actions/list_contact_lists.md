# Mailtrap · `list_contact_lists`

List Mailtrap contact lists.

- **Service**: `mailtrap`
- **Action**: `list_contact_lists`
- **Action id**: `mailtrap.list_contact_lists`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mailtrap" --action "list_contact_lists"
```

## Run

```bash
oo connector run "mailtrap" --action "list_contact_lists" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
