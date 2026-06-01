# Templated · `get_template`

Retrieve a single Templated template by its template ID.

- **Service**: `templated`
- **Action**: `get_template`
- **Action id**: `templated.get_template`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "get_template"
```

## Run

```bash
oo connector run "templated" --action "get_template" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
