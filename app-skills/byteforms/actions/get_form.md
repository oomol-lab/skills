# ByteForms · `get_form`

Get one ByteForms form by form ID.

- **Service**: `byteforms`
- **Action**: `get_form`
- **Action id**: `byteforms.get_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "byteforms" --action "get_form"
```

## Run

```bash
oo connector run "byteforms" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
