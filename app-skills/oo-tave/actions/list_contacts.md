# Táve · `list_contacts`

List contacts in the current Táve studio with official pagination, hidden, email, and sort filters.

- **Service**: `tave`
- **Action**: `list_contacts`
- **Action id**: `tave.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tave" --action "list_contacts"
```

## Run

```bash
oo connector run "tave" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
