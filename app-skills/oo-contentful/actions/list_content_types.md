# Contentful · `list_content_types`

List Contentful content types available in a specific environment.

- **Service**: `contentful`
- **Action**: `list_content_types`
- **Action id**: `contentful.list_content_types`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "list_content_types"
```

## Run

```bash
oo connector run "contentful" --action "list_content_types" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
