# Agenty · `get_page_content`

Fetch the rendered HTML content for one web page.

- **Service**: `agenty`
- **Action**: `get_page_content`
- **Action id**: `agenty.get_page_content`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_page_content"
```

## Run

```bash
oo connector run "agenty" --action "get_page_content" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
