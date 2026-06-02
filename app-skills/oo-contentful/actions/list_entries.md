# Contentful · `list_entries`

List Contentful entries with common filtering, pagination, and include options.

- **Service**: `contentful`
- **Action**: `list_entries`
- **Action id**: `contentful.list_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "list_entries"
```

## Run

```bash
oo connector run "contentful" --action "list_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
