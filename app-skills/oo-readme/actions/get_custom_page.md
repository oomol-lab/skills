# ReadMe · `get_custom_page`

Get one ReadMe custom page by slug.

- **Service**: `readme`
- **Action**: `get_custom_page`
- **Action id**: `readme.get_custom_page`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "readme" --action "get_custom_page"
```

## Run

```bash
oo connector run "readme" --action "get_custom_page" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
