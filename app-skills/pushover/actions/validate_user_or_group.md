# Pushover · `validate_user_or_group`

Validate that a Pushover user or delivery group key can receive notifications, optionally restricted to one device.

- **Service**: `pushover`
- **Action**: `validate_user_or_group`
- **Action id**: `pushover.validate_user_or_group`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "validate_user_or_group"
```

## Run

```bash
oo connector run "pushover" --action "validate_user_or_group" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
