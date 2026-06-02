# SMS Alert · `list_sender_ids`

List the sender IDs available in the SMS Alert account.

- **Service**: `sms_alert`
- **Action**: `list_sender_ids`
- **Action id**: `sms_alert.list_sender_ids`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "sms_alert" --action "list_sender_ids"
```

## Run

```bash
oo connector run "sms_alert" --action "list_sender_ids" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
