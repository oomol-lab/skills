# Vapi · `list_phone_numbers`

List Vapi phone numbers with optional created and updated timestamp filters.

- **Service**: `vapi`
- **Action**: `list_phone_numbers`
- **Action id**: `vapi.list_phone_numbers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "vapi" --action "list_phone_numbers"
```

## Run

```bash
oo connector run "vapi" --action "list_phone_numbers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
