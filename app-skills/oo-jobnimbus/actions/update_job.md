# JobNimbus · `update_job`

Update one JobNimbus job by ID from a raw job payload, with optional actor, bulk, and skip controls.

- **Service**: `jobnimbus`
- **Action**: `update_job`
- **Action id**: `jobnimbus.update_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "update_job"
```

## Run

```bash
oo connector run "jobnimbus" --action "update_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes JobNimbus state. Confirm the exact payload and intended effect with the user before running.
