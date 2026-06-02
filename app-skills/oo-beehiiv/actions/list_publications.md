# Beehiiv · `list_publications`

List Beehiiv publications associated with the API key, with optional sorting and expansion.

- **Service**: `beehiiv`
- **Action**: `list_publications`
- **Action id**: `beehiiv.list_publications`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "beehiiv" --action "list_publications"
```

## Run

```bash
oo connector run "beehiiv" --action "list_publications" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
