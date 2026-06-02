# Formbricks · `list_contact_attribute_keys`

List Formbricks contact attribute keys with optional pagination, sorting, date filters, and workspace scoping.

- **Service**: `formbricks`
- **Action**: `list_contact_attribute_keys`
- **Action id**: `formbricks.list_contact_attribute_keys`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "list_contact_attribute_keys"
```

## Run

```bash
oo connector run "formbricks" --action "list_contact_attribute_keys" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
