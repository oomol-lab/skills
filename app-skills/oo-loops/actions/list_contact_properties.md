# Loops · `list_contact_properties`

List default or custom Loops contact properties.

- **Service**: `loops`
- **Action**: `list_contact_properties`
- **Action id**: `loops.list_contact_properties`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loops" --action "list_contact_properties"
```

## Run

```bash
oo connector run "loops" --action "list_contact_properties" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
