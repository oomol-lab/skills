# SatisMeter · `list_survey_responses`

List responses recorded for one SatisMeter survey.

- **Service**: `satismeter`
- **Action**: `list_survey_responses`
- **Action id**: `satismeter.list_survey_responses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "satismeter" --action "list_survey_responses"
```

## Run

```bash
oo connector run "satismeter" --action "list_survey_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
