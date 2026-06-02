# Notion · `get_page`

Get a Notion page together with its first-level child blocks. This is a repo-level aggregate helper over page retrieval plus block-children listing.

- **Service**: `notion`
- **Action**: `get_page`
- **Action id**: `notion.get_page`
- **Required scopes**: notion.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "notion" --action "get_page"
```

## Run

```bash
oo connector run "notion" --action "get_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
