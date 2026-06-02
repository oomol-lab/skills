# ZeroBounce · `validate_email`

Validate a single email address with ZeroBounce in real time.

- **Service**: `zerobounce`
- **Action**: `validate_email`
- **Action id**: `zerobounce.validate_email`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zerobounce" --action "validate_email"
```

## Run

```bash
oo connector run "zerobounce" --action "validate_email" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
