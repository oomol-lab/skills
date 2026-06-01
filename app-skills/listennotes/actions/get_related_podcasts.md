# Listen Notes · `get_related_podcasts`

Get related podcast recommendations from Listen Notes by podcast ID.

- **Service**: `listennotes`
- **Action**: `get_related_podcasts`
- **Action id**: `listennotes.get_related_podcasts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "listennotes" --action "get_related_podcasts"
```

## Run

```bash
oo connector run "listennotes" --action "get_related_podcasts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
