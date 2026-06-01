# ReadMe · `list_custom_pages`

List ReadMe custom pages with optional pagination.

- **Service**: `readme`
- **Action**: `list_custom_pages`
- **Action id**: `readme.list_custom_pages`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "list_custom_pages"
```

## Run

```bash
oo connector run "readme" --action "list_custom_pages" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
