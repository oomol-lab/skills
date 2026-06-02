# BoloForms · `list_template_respondents`

List the current signing participants and their statuses for a specific template.

- **Service**: `boloforms`
- **Action**: `list_template_respondents`
- **Action id**: `boloforms.list_template_respondents`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "boloforms" --action "list_template_respondents"
```

## Run

```bash
oo connector run "boloforms" --action "list_template_respondents" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
