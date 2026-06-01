# DataForSEO · `backlinks_list_live`

Retrieve DataForSEO Backlinks records for a domain, subdomain, or page.

- **Service**: `dataforseo`
- **Action**: `backlinks_list_live`
- **Action id**: `dataforseo.backlinks_list_live`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "dataforseo" --action "backlinks_list_live"
```

## Run

```bash
oo connector run "dataforseo" --action "backlinks_list_live" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
