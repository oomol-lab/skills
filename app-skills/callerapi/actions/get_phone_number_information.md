# CallerAPI · `get_phone_number_information`

Look up CallerAPI spam reputation, business details, complaints, and optional HLR carrier data for a phone number.

- **Service**: `callerapi`
- **Action**: `get_phone_number_information`
- **Action id**: `callerapi.get_phone_number_information`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "callerapi" --action "get_phone_number_information"
```

## Run

```bash
oo connector run "callerapi" --action "get_phone_number_information" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
