# Tavily · `search`

Execute a Tavily Search query and return ranked source results.

- **Service**: `tavily`
- **Action**: `search`
- **Action id**: `tavily.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tavily" --action "search"
```

## Run

```bash
oo connector run "tavily" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
