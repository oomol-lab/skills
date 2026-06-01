# Healthchecks.io · `delete_check`

Delete a Healthchecks.io check by UUID.

- **Service**: `healthchecks_io`
- **Action**: `delete_check`
- **Action id**: `healthchecks_io.delete_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "delete_check"
```

## Run

```bash
oo connector run "healthchecks_io" --action "delete_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Healthchecks.io data. Always confirm the target and get explicit user approval before running.
