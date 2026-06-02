# Formsite · `get_form_items`

List the item definitions for one Formsite form.

- **Service**: `formsite`
- **Action**: `get_form_items`
- **Action id**: `formsite.get_form_items`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "get_form_items"
```

## Run

```bash
oo connector run "formsite" --action "get_form_items" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
