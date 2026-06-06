# Parsera · `list_proxy_countries`

List proxy countries available to Parsera extraction requests.

- **Service**: `parsera`
- **Action**: `list_proxy_countries`
- **Action id**: `parsera.list_proxy_countries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "parsera" --action "list_proxy_countries"
```

## Run

```bash
oo connector run "parsera" --action "list_proxy_countries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
