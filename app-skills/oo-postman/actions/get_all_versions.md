# Postman · `get_all_versions`

Tool to get all published versions of a specific API in Postman. Use when you need to list or retrieve version information for an API. Returns an array of version objects with their IDs and names.

- **Service**: `postman`
- **Action**: `get_all_versions`
- **Action id**: `postman.get_all_versions`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "postman" --action "get_all_versions"
```

## Run

```bash
oo connector run "postman" --action "get_all_versions" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
