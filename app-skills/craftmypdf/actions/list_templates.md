# CraftMyPDF · `list_templates`

List CraftMyPDF templates with optional pagination and group-name filtering.

- **Service**: `craftmypdf`
- **Action**: `list_templates`
- **Action id**: `craftmypdf.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "craftmypdf" --action "list_templates"
```

## Run

```bash
oo connector run "craftmypdf" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
