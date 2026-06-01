# Systeme.io · `list_contact_fields`

List custom contact fields from Systeme.io.

- **Service**: `systeme_io`
- **Action**: `list_contact_fields`
- **Action id**: `systeme_io.list_contact_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "systeme_io" --action "list_contact_fields"
```

## Run

```bash
oo connector run "systeme_io" --action "list_contact_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
