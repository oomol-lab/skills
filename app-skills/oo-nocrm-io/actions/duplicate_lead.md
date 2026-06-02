# noCRM.io · `duplicate_lead`

Duplicate an existing noCRM.io lead into another step.

- **Service**: `nocrm_io`
- **Action**: `duplicate_lead`
- **Action id**: `nocrm_io.duplicate_lead`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "duplicate_lead"
```

## Run

```bash
oo connector run "nocrm_io" --action "duplicate_lead" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes noCRM.io state. Confirm the exact payload and intended effect with the user before running.
