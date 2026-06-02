# Short.io · `list_domains`

List domains available to the authenticated Short.io API key.

- **Service**: `short_io`
- **Action**: `list_domains`
- **Action id**: `short_io.list_domains`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "short_io" --action "list_domains"
```

## Run

```bash
oo connector run "short_io" --action "list_domains" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
