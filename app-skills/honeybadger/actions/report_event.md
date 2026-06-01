# Honeybadger · `report_event`

Report one or more Honeybadger Insights events.

- **Service**: `honeybadger`
- **Action**: `report_event`
- **Action id**: `honeybadger.report_event`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "honeybadger" --action "report_event"
```

## Run

```bash
oo connector run "honeybadger" --action "report_event" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
