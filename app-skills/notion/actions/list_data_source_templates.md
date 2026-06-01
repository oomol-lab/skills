# Notion · `list_data_source_templates`

List templates available on a Notion data source.

- **Service**: `notion`
- **Action**: `list_data_source_templates`
- **Action id**: `notion.list_data_source_templates`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "list_data_source_templates"
```

## Run

```bash
oo connector run "notion" --action "list_data_source_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
