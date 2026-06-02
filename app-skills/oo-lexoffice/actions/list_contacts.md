# lexoffice · `list_contacts`

List Lexoffice contacts with optional filters and page navigation.

- **Service**: `lexoffice`
- **Action**: `list_contacts`
- **Action id**: `lexoffice.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "lexoffice" --action "list_contacts"
```

## Run

```bash
oo connector run "lexoffice" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
