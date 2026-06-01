# BoloForms · `get_form_responses`

List response records for a specific form so they can be used in follow-up automations.

- **Service**: `boloforms`
- **Action**: `get_form_responses`
- **Action id**: `boloforms.get_form_responses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boloforms" --action "get_form_responses"
```

## Run

```bash
oo connector run "boloforms" --action "get_form_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
