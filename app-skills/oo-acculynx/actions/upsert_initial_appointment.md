# AccuLynx · `upsert_initial_appointment`

Add or update the initial appointment for one AccuLynx job.

- **Service**: `acculynx`
- **Action**: `upsert_initial_appointment`
- **Action id**: `acculynx.upsert_initial_appointment`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "acculynx" --action "upsert_initial_appointment"
```

## Run

```bash
oo connector run "acculynx" --action "upsert_initial_appointment" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes AccuLynx state. Confirm the exact payload and intended effect with the user before running.
