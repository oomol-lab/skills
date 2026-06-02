# Pushover · `cancel_receipt_retries`

Cancel further retries for one emergency receipt before it expires.

- **Service**: `pushover`
- **Action**: `cancel_receipt_retries`
- **Action id**: `pushover.cancel_receipt_retries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "cancel_receipt_retries"
```

## Run

```bash
oo connector run "pushover" --action "cancel_receipt_retries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
