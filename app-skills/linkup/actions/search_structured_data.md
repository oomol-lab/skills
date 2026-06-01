# Linkup · `search_structured_data`

Search the web with Linkup and return data normalized to the provided JSON schema.

- **Service**: `linkup`
- **Action**: `search_structured_data`
- **Action id**: `linkup.search_structured_data`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "linkup" --action "search_structured_data"
```

## Run

```bash
oo connector run "linkup" --action "search_structured_data" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
