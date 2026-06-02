# Honeybadger · `report_check_in`

Report a Honeybadger check-in by id or slug.

- **Service**: `honeybadger`
- **Action**: `report_check_in`
- **Action id**: `honeybadger.report_check_in`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "honeybadger" --action "report_check_in"
```

## Run

```bash
oo connector run "honeybadger" --action "report_check_in" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
