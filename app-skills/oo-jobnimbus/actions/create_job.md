# JobNimbus · `create_job`

Create one JobNimbus job from a raw job payload, with optional actor, bulk, and skip controls.

- **Service**: `jobnimbus`
- **Action**: `create_job`
- **Action id**: `jobnimbus.create_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jobnimbus" --action "create_job"
```

## Run

```bash
oo connector run "jobnimbus" --action "create_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes JobNimbus state. Confirm the exact payload and intended effect with the user before running.
