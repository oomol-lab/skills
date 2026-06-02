# Delighted · `list_survey_responses`

List survey responses collected in the connected Delighted account.

- **Service**: `delighted`
- **Action**: `list_survey_responses`
- **Action id**: `delighted.list_survey_responses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "delighted" --action "list_survey_responses"
```

## Run

```bash
oo connector run "delighted" --action "list_survey_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
