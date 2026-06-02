# Genderize · `predict_gender_batch`

Predict the gender probability for up to 10 names in a single request, optionally localized to one country.

- **Service**: `genderize`
- **Action**: `predict_gender_batch`
- **Action id**: `genderize.predict_gender_batch`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "genderize" --action "predict_gender_batch"
```

## Run

```bash
oo connector run "genderize" --action "predict_gender_batch" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
