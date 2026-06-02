# GenderAPI.io · `get_gender_by_username`

Infer the likely gender for one username or nickname with optional country and AI fallback hints.

- **Service**: `genderapi_io`
- **Action**: `get_gender_by_username`
- **Action id**: `genderapi_io.get_gender_by_username`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "genderapi_io" --action "get_gender_by_username"
```

## Run

```bash
oo connector run "genderapi_io" --action "get_gender_by_username" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
