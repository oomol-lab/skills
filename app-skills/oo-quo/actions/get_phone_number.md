# Quo · `get_phone_number`

Get details for a Quo phone number by ID.

- **Service**: `quo`
- **Action**: `get_phone_number`
- **Action id**: `quo.get_phone_number`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "quo" --action "get_phone_number"
```

## Run

```bash
oo connector run "quo" --action "get_phone_number" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
