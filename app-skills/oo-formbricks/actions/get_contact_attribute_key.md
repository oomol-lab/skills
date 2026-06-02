# Formbricks · `get_contact_attribute_key`

Get one Formbricks contact attribute key by its identifier.

- **Service**: `formbricks`
- **Action**: `get_contact_attribute_key`
- **Action id**: `formbricks.get_contact_attribute_key`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formbricks" --action "get_contact_attribute_key"
```

## Run

```bash
oo connector run "formbricks" --action "get_contact_attribute_key" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
