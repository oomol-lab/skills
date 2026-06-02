# RenderForm · `list_templates`

List RenderForm templates with optional pagination and filters for name, tags, and source template ID.

- **Service**: `renderform`
- **Action**: `list_templates`
- **Action id**: `renderform.list_templates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "renderform" --action "list_templates"
```

## Run

```bash
oo connector run "renderform" --action "list_templates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
