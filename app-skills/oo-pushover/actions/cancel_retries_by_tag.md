# Pushover · `cancel_retries_by_tag`

Cancel retries for all active emergency receipts that share the provided tag.

- **Service**: `pushover`
- **Action**: `cancel_retries_by_tag`
- **Action id**: `pushover.cancel_retries_by_tag`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "cancel_retries_by_tag"
```

## Run

```bash
oo connector run "pushover" --action "cancel_retries_by_tag" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
