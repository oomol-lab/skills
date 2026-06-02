# Google Forms · `get_form`

Retrieve the current structure, settings, publish state, and items of a Google Form.

- **Service**: `googleforms`
- **Action**: `get_form`
- **Action id**: `googleforms.get_form`
- **Required scopes**: googleforms.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "get_form"
```

## Run

```bash
oo connector run "googleforms" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
