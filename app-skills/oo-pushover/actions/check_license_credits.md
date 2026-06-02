# Pushover · `check_license_credits`

Get the number of prepaid Pushover license credits remaining on the application.

- **Service**: `pushover`
- **Action**: `check_license_credits`
- **Action id**: `pushover.check_license_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "check_license_credits"
```

## Run

```bash
oo connector run "pushover" --action "check_license_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
