# SatisMeter · `get_survey_statistics`

Retrieve aggregated statistics for one SatisMeter survey.

- **Service**: `satismeter`
- **Action**: `get_survey_statistics`
- **Action id**: `satismeter.get_survey_statistics`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "satismeter" --action "get_survey_statistics"
```

## Run

```bash
oo connector run "satismeter" --action "get_survey_statistics" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
