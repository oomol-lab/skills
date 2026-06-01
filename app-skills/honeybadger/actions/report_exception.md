# Honeybadger · `report_exception`

Report an exception notice to Honeybadger.

- **Service**: `honeybadger`
- **Action**: `report_exception`
- **Action id**: `honeybadger.report_exception`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "honeybadger" --action "report_exception"
```

## Run

```bash
oo connector run "honeybadger" --action "report_exception" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
