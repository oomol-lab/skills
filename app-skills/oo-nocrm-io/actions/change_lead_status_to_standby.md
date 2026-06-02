# noCRM.io · `change_lead_status_to_standby`

Change a noCRM.io lead to standby and schedule its next reminder.

- **Service**: `nocrm_io`
- **Action**: `change_lead_status_to_standby`
- **Action id**: `nocrm_io.change_lead_status_to_standby`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "change_lead_status_to_standby"
```

## Run

```bash
oo connector run "nocrm_io" --action "change_lead_status_to_standby" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
