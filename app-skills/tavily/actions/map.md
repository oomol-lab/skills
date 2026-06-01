# Tavily · `map`

Discover URLs from a website with Tavily Map.

- **Service**: `tavily`
- **Action**: `map`
- **Action id**: `tavily.map`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tavily" --action "map"
```

## Run

```bash
oo connector run "tavily" --action "map" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
