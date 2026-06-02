# Contentful · `get_current_user`

Get the authenticated Contentful user profile for the current personal access token.

- **Service**: `contentful`
- **Action**: `get_current_user`
- **Action id**: `contentful.get_current_user`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "contentful" --action "get_current_user"
```

## Run

```bash
oo connector run "contentful" --action "get_current_user" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
