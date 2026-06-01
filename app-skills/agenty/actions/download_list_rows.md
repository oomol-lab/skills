# Agenty · `download_list_rows`

Download all rows from one Agenty list as raw text content.

- **Service**: `agenty`
- **Action**: `download_list_rows`
- **Action id**: `agenty.download_list_rows`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "agenty" --action "download_list_rows"
```

## Run

```bash
oo connector run "agenty" --action "download_list_rows" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
