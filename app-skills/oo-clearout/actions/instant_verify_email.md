# Clearout · `instant_verify_email`

Verify an email address in real time and return the full Clearout verification result.

- **Service**: `clearout`
- **Action**: `instant_verify_email`
- **Action id**: `clearout.instant_verify_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clearout" --action "instant_verify_email"
```

## Run

```bash
oo connector run "clearout" --action "instant_verify_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
