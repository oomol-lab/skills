# Twitter · `search_full_archive_counts`

Count Tweets over the full public archive using app-only auth.

- **Service**: `twitter`
- **Action**: `search_full_archive_counts`
- **Action id**: `twitter.search_full_archive_counts`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "search_full_archive_counts"
```

## Run

```bash
oo connector run "twitter" --action "search_full_archive_counts" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
