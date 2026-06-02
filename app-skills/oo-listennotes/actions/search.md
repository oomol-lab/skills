# Listen Notes · `search`

Search Listen Notes podcasts or episodes by keyword.

- **Service**: `listennotes`
- **Action**: `search`
- **Action id**: `listennotes.search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "search"
```

## Run

```bash
oo connector run "listennotes" --action "search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
