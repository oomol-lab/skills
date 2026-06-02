# Google Address Validation · `provide_validation_feedback`

Send the final outcome of a completed Google address validation sequence using the first responseId from that sequence.

- **Service**: `google_address_validation`
- **Action**: `provide_validation_feedback`
- **Action id**: `google_address_validation.provide_validation_feedback`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "google_address_validation" --action "provide_validation_feedback"
```

## Run

```bash
oo connector run "google_address_validation" --action "provide_validation_feedback" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
