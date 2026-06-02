# Mopinion · `get_report_feedback`

Fetch one feedback item from a Mopinion report.

- **Service**: `mopinion`
- **Action**: `get_report_feedback`
- **Action id**: `mopinion.get_report_feedback`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "mopinion" --action "get_report_feedback"
```

## Run

```bash
oo connector run "mopinion" --action "get_report_feedback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
