# Contentful · `list_environments`

List Contentful environments inside a specific space.

- **Service**: `contentful`
- **Action**: `list_environments`
- **Action id**: `contentful.list_environments`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "list_environments"
```

## Run

```bash
oo connector run "contentful" --action "list_environments" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
