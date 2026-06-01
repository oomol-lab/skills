# noCRM.io · `assign_lead_to_user`

Assign a noCRM.io lead to a specific user.

- **Service**: `nocrm_io`
- **Action**: `assign_lead_to_user`
- **Action id**: `nocrm_io.assign_lead_to_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "assign_lead_to_user"
```

## Run

```bash
oo connector run "nocrm_io" --action "assign_lead_to_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes noCRM.io state. Confirm the exact payload and intended effect with the user before running.
