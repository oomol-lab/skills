# Templated · `list_templates`

List Templated templates with optional filters for name, dimensions, and tags.

- **Service**: `templated`
- **Action**: `list_templates`
- **Action id**: `templated.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "templated" --action "list_templates"
```

## Run

```bash
oo connector run "templated" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
