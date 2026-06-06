# Quo · `list_phone_numbers`

List phone numbers in the connected Quo workspace.

- **Service**: `quo`
- **Action**: `list_phone_numbers`
- **Action id**: `quo.list_phone_numbers`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "list_phone_numbers"
```

## Run

```bash
oo connector run "quo" --action "list_phone_numbers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
