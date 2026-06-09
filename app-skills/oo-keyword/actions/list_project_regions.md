# Keyword.com · `list_project_regions`

List Google regions tracked by a Keyword.com project or group.

- **Service**: `keyword`
- **Action**: `list_project_regions`
- **Action id**: `keyword.list_project_regions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "keyword" --action "list_project_regions"
```

## Run

```bash
oo connector run "keyword" --action "list_project_regions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
