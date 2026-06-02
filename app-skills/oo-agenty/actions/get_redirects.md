# Agenty · `get_redirects`

Return the ordered redirect chain for one URL.

- **Service**: `agenty`
- **Action**: `get_redirects`
- **Action id**: `agenty.get_redirects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "get_redirects"
```

## Run

```bash
oo connector run "agenty" --action "get_redirects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
