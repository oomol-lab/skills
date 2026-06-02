# TelTel · `get_sms_report`

Get the delivery report for one outbound TelTel SMS message.

- **Service**: `teltel`
- **Action**: `get_sms_report`
- **Action id**: `teltel.get_sms_report`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "teltel" --action "get_sms_report"
```

## Run

```bash
oo connector run "teltel" --action "get_sms_report" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
