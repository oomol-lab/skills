# Slite · `search_notes`

Search Slite notes by query string and optional review, depth, archive, and date filters.

- **Service**: `slite`
- **Action**: `search_notes`
- **Action id**: `slite.search_notes`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "slite" --action "search_notes"
```

## Run

```bash
oo connector run "slite" --action "search_notes" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
