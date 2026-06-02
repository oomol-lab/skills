# Pushover · `get_receipt_status`

Get the status of an emergency notification receipt, including acknowledgment, callback, and expiry details.

- **Service**: `pushover`
- **Action**: `get_receipt_status`
- **Action id**: `pushover.get_receipt_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "get_receipt_status"
```

## Run

```bash
oo connector run "pushover" --action "get_receipt_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
