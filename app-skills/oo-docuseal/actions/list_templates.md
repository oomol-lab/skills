# DocuSeal · `list_templates`

List DocuSeal document templates with optional filters and ID-based pagination.

- **Service**: `docuseal`
- **Action**: `list_templates`
- **Action id**: `docuseal.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "docuseal" --action "list_templates"
```

## Run

```bash
oo connector run "docuseal" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
