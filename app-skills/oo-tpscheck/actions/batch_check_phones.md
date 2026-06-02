# TPSCheck · `batch_check_phones`

Check up to 100 UK phone numbers against TPS and CTPS and return the TPSCheck v2 batch response.

- **Service**: `tpscheck`
- **Action**: `batch_check_phones`
- **Action id**: `tpscheck.batch_check_phones`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tpscheck" --action "batch_check_phones"
```

## Run

```bash
oo connector run "tpscheck" --action "batch_check_phones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
