# Notion · `search`

Search Notion pages and data sources with optional filter, sort, and pagination controls.

- **Service**: `notion`
- **Action**: `search`
- **Action id**: `notion.search`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "search"
```

## Run

```bash
oo connector run "notion" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
