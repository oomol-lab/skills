# Healthchecks.io · `resume_check`

Resume monitoring for a Healthchecks.io check by UUID.

- **Service**: `healthchecks_io`
- **Action**: `resume_check`
- **Action id**: `healthchecks_io.resume_check`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "healthchecks_io" --action "resume_check"
```

## Run

```bash
oo connector run "healthchecks_io" --action "resume_check" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
