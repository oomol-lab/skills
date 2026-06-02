# GenderAPI.io · `get_gender_by_first_name`

Infer the likely gender for one first name with optional country and AI fallback hints.

- **Service**: `genderapi_io`
- **Action**: `get_gender_by_first_name`
- **Action id**: `genderapi_io.get_gender_by_first_name`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "genderapi_io" --action "get_gender_by_first_name"
```

## Run

```bash
oo connector run "genderapi_io" --action "get_gender_by_first_name" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
