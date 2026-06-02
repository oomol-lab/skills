# urlscan.io · `search_scans`

Search urlscan.io scans with the documented search query syntax.

- **Service**: `urlscan`
- **Action**: `search_scans`
- **Action id**: `urlscan.search_scans`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "urlscan" --action "search_scans"
```

## Run

```bash
oo connector run "urlscan" --action "search_scans" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
