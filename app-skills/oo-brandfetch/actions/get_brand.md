# Brandfetch · `get_brand`

Fetch a Brandfetch brand profile from a domain, Brand ID, ISIN, or stock ticker identifier.

- **Service**: `brandfetch`
- **Action**: `get_brand`
- **Action id**: `brandfetch.get_brand`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "brandfetch" --action "get_brand"
```

## Run

```bash
oo connector run "brandfetch" --action "get_brand" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
