# TinyURL · `list_urls`

List TinyURLs from the TinyURL account by availability status.

- **Service**: `tinyurl`
- **Action**: `list_urls`
- **Action id**: `tinyurl.list_urls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tinyurl" --action "list_urls"
```

## Run

```bash
oo connector run "tinyurl" --action "list_urls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
