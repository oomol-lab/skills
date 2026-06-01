# Webshare · `list_proxies`

List Webshare proxies with official mode, pagination, and filter options.

- **Service**: `webshare`
- **Action**: `list_proxies`
- **Action id**: `webshare.list_proxies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "webshare" --action "list_proxies"
```

## Run

```bash
oo connector run "webshare" --action "list_proxies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
