# ByteForms · `list_form_responses`

List responses for one ByteForms form with the documented cursor, query, order, and limit parameters.

- **Service**: `byteforms`
- **Action**: `list_form_responses`
- **Action id**: `byteforms.list_form_responses`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "byteforms" --action "list_form_responses"
```

## Run

```bash
oo connector run "byteforms" --action "list_form_responses" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
