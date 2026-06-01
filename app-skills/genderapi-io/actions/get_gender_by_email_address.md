# GenderAPI.io · `get_gender_by_email_address`

Infer the likely gender for one email address after GenderAPI.io extracts a name from it.

- **Service**: `genderapi_io`
- **Action**: `get_gender_by_email_address`
- **Action id**: `genderapi_io.get_gender_by_email_address`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "genderapi_io" --action "get_gender_by_email_address"
```

## Run

```bash
oo connector run "genderapi_io" --action "get_gender_by_email_address" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
