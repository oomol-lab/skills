# Healthchecks.io · `update_check`

Update a Healthchecks.io check by UUID.

- **Service**: `healthchecks_io`
- **Action**: `update_check`
- **Action id**: `healthchecks_io.update_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "update_check"
```

## Run

```bash
oo connector run "healthchecks_io" --action "update_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Healthchecks.io state. Confirm the exact payload and intended effect with the user before running.
