# ReadMe · `list_category_docs`

List the ReadMe docs that belong to a category slug.

- **Service**: `readme`
- **Action**: `list_category_docs`
- **Action id**: `readme.list_category_docs`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "list_category_docs"
```

## Run

```bash
oo connector run "readme" --action "list_category_docs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
