# Docmosis · `list_templates`

List Docmosis templates available in the selected processing location with optional folder and paging controls.

- **Service**: `docmosis`
- **Action**: `list_templates`
- **Action id**: `docmosis.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docmosis" --action "list_templates"
```

## Run

```bash
oo connector run "docmosis" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
