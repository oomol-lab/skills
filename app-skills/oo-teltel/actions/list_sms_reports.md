# TelTel · `list_sms_reports`

List outbound TelTel SMS delivery reports with optional paging and filter parameters.

- **Service**: `teltel`
- **Action**: `list_sms_reports`
- **Action id**: `teltel.list_sms_reports`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "teltel" --action "list_sms_reports"
```

## Run

```bash
oo connector run "teltel" --action "list_sms_reports" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
