# SMS Alert · `list_templates`

List SMS templates from the SMS Alert account with optional pagination.

- **Service**: `sms_alert`
- **Action**: `list_templates`
- **Action id**: `sms_alert.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sms_alert" --action "list_templates"
```

## Run

```bash
oo connector run "sms_alert" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
