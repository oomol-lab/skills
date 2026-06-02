# Elorus · `list_contacts`

List Elorus contacts with optional search, filters, and pagination.

- **Service**: `elorus`
- **Action**: `list_contacts`
- **Action id**: `elorus.list_contacts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "elorus" --action "list_contacts"
```

## Run

```bash
oo connector run "elorus" --action "list_contacts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
