# You.com · `search`

Search web and news sources with the You.com Search API.

- **Service**: `you`
- **Action**: `search`
- **Action id**: `you.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "you" --action "search"
```

## Run

```bash
oo connector run "you" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
