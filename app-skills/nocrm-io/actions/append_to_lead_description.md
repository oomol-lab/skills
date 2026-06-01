# noCRM.io · `append_to_lead_description`

Append text to the description of a noCRM.io lead.

- **Service**: `nocrm_io`
- **Action**: `append_to_lead_description`
- **Action id**: `nocrm_io.append_to_lead_description`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "append_to_lead_description"
```

## Run

```bash
oo connector run "nocrm_io" --action "append_to_lead_description" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
