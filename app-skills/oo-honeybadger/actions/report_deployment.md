# Honeybadger · `report_deployment`

Report a deployment to Honeybadger.

- **Service**: `honeybadger`
- **Action**: `report_deployment`
- **Action id**: `honeybadger.report_deployment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "honeybadger" --action "report_deployment"
```

## Run

```bash
oo connector run "honeybadger" --action "report_deployment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
