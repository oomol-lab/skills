# noCRM.io · `change_lead_status_to_cancelled`

Change a noCRM.io lead status to cancelled.

- **Service**: `nocrm_io`
- **Action**: `change_lead_status_to_cancelled`
- **Action id**: `nocrm_io.change_lead_status_to_cancelled`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "change_lead_status_to_cancelled"
```

## Run

```bash
oo connector run "nocrm_io" --action "change_lead_status_to_cancelled" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
