# Honeybadger · `report_check_in_with_payload`

Report a Honeybadger check-in with payload data.

- **Service**: `honeybadger`
- **Action**: `report_check_in_with_payload`
- **Action id**: `honeybadger.report_check_in_with_payload`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "honeybadger" --action "report_check_in_with_payload"
```

## Run

```bash
oo connector run "honeybadger" --action "report_check_in_with_payload" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
