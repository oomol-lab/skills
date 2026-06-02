# Typeform · `get_form`

Get one Typeform form by form ID.

- **Service**: `typeform`
- **Action**: `get_form`
- **Action id**: `typeform.get_form`
- **Required scopes**: forms:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "typeform" --action "get_form"
```

## Run

```bash
oo connector run "typeform" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
