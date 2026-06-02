# noCRM.io · `delete_lead`

Delete a noCRM.io lead.

- **Service**: `nocrm_io`
- **Action**: `delete_lead`
- **Action id**: `nocrm_io.delete_lead`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "delete_lead"
```

## Run

```bash
oo connector run "nocrm_io" --action "delete_lead" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites noCRM.io data. Always confirm the target and get explicit user approval before running.
