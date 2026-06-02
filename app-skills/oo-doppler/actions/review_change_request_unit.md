# Doppler · `review_change_request_unit`

Submit an approving review for one Doppler change request unit.

- **Service**: `doppler`
- **Action**: `review_change_request_unit`
- **Action id**: `doppler.review_change_request_unit`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "doppler" --action "review_change_request_unit"
```

## Run

```bash
oo connector run "doppler" --action "review_change_request_unit" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
