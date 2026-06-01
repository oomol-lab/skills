# SatisMeter · `get_survey`

Retrieve a SatisMeter survey by ID.

- **Service**: `satismeter`
- **Action**: `get_survey`
- **Action id**: `satismeter.get_survey`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "satismeter" --action "get_survey"
```

## Run

```bash
oo connector run "satismeter" --action "get_survey" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
