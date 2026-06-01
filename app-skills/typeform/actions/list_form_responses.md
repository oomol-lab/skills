# Typeform · `list_form_responses`

List responses submitted to one Typeform form.

- **Service**: `typeform`
- **Action**: `list_form_responses`
- **Action id**: `typeform.list_form_responses`
- **Required scopes**: responses:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typeform" --action "list_form_responses"
```

## Run

```bash
oo connector run "typeform" --action "list_form_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
