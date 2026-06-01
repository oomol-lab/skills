# Jotform · `list_form_questions`

List the question definitions configured on one Jotform form.

- **Service**: `jotform`
- **Action**: `list_form_questions`
- **Action id**: `jotform.list_form_questions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jotform" --action "list_form_questions"
```

## Run

```bash
oo connector run "jotform" --action "list_form_questions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
