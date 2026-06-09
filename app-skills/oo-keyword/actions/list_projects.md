# Keyword.com · `list_projects`

List active Keyword.com projects and groups visible to the API token.

- **Service**: `keyword`
- **Action**: `list_projects`
- **Action id**: `keyword.list_projects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keyword" --action "list_projects"
```

## Run

```bash
oo connector run "keyword" --action "list_projects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
