# Google Forms · `create_form`

Create a Google Form with a simple title-based input and optionally initialize the description and unpublished state.

- **Service**: `googleforms`
- **Action**: `create_form`
- **Action id**: `googleforms.create_form`
- **Required scopes**: googleforms.write

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleforms" --action "create_form"
```

## Run

```bash
oo connector run "googleforms" --action "create_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Google Forms state. Confirm the exact payload and intended effect with the user before running.
