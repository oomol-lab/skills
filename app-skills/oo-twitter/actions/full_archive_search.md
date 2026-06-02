# Twitter · `full_archive_search`

Search the full public Tweet archive using app-only auth.

- **Service**: `twitter`
- **Action**: `full_archive_search`
- **Action id**: `twitter.full_archive_search`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "twitter" --action "full_archive_search"
```

## Run

```bash
oo connector run "twitter" --action "full_archive_search" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
