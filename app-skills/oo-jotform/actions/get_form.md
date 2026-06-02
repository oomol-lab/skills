# Jotform · `get_form`

Get one Jotform form by form ID.

- **Service**: `jotform`
- **Action**: `get_form`
- **Action id**: `jotform.get_form`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "jotform" --action "get_form"
```

## Run

```bash
oo connector run "jotform" --action "get_form" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
