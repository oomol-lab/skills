# Healthchecks.io · `pause_check`

Pause monitoring for a Healthchecks.io check by UUID.

- **Service**: `healthchecks_io`
- **Action**: `pause_check`
- **Action id**: `healthchecks_io.pause_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "pause_check"
```

## Run

```bash
oo connector run "healthchecks_io" --action "pause_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
