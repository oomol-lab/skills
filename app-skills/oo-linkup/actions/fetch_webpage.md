# Linkup · `fetch_webpage`

Fetch one webpage with Linkup and return markdown plus optional raw HTML and images.

- **Service**: `linkup`
- **Action**: `fetch_webpage`
- **Action id**: `linkup.fetch_webpage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkup" --action "fetch_webpage"
```

## Run

```bash
oo connector run "linkup" --action "fetch_webpage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
