# noCRM.io · `add_tag_to_lead`

Add one or more tags to a noCRM.io lead.

- **Service**: `nocrm_io`
- **Action**: `add_tag_to_lead`
- **Action id**: `nocrm_io.add_tag_to_lead`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nocrm_io" --action "add_tag_to_lead"
```

## Run

```bash
oo connector run "nocrm_io" --action "add_tag_to_lead" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes noCRM.io state. Confirm the exact payload and intended effect with the user before running.
