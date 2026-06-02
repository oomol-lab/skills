# Formsite · `get_form`

Get one Formsite form by its form directory identifier.

- **Service**: `formsite`
- **Action**: `get_form`
- **Action id**: `formsite.get_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "formsite" --action "get_form"
```

## Run

```bash
oo connector run "formsite" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
