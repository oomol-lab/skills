# Contentful · `list_spaces`

List Contentful spaces accessible to the current personal access token.

- **Service**: `contentful`
- **Action**: `list_spaces`
- **Action id**: `contentful.list_spaces`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "list_spaces"
```

## Run

```bash
oo connector run "contentful" --action "list_spaces" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
