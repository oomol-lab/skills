# AccuLynx · `list_calendar_appointments`

List appointment summaries for one AccuLynx calendar within a date range.

- **Service**: `acculynx`
- **Action**: `list_calendar_appointments`
- **Action id**: `acculynx.list_calendar_appointments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "list_calendar_appointments"
```

## Run

```bash
oo connector run "acculynx" --action "list_calendar_appointments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
