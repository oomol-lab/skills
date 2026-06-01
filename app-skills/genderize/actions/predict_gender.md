# Genderize · `predict_gender`

Predict the gender probability for a single name, optionally localized to one country.

- **Service**: `genderize`
- **Action**: `predict_gender`
- **Action id**: `genderize.predict_gender`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "genderize" --action "predict_gender"
```

## Run

```bash
oo connector run "genderize" --action "predict_gender" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
