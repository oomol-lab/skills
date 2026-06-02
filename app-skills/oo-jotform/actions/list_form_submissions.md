# Jotform · `list_form_submissions`

List submissions for one Jotform form.

- **Service**: `jotform`
- **Action**: `list_form_submissions`
- **Action id**: `jotform.list_form_submissions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jotform" --action "list_form_submissions"
```

## Run

```bash
oo connector run "jotform" --action "list_form_submissions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
