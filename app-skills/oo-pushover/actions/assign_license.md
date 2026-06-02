# Pushover · `assign_license`

Assign one prepaid Pushover license credit to a user by key or email address.

- **Service**: `pushover`
- **Action**: `assign_license`
- **Action id**: `pushover.assign_license`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pushover" --action "assign_license"
```

## Run

```bash
oo connector run "pushover" --action "assign_license" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Pushover state. Confirm the exact payload and intended effect with the user before running.
