# OpenPageRank · `get_page_rank`

Look up OpenPageRank scores for one or more domains and return normalized rank metadata.

- **Service**: `openpagerank`
- **Action**: `get_page_rank`
- **Action id**: `openpagerank.get_page_rank`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "openpagerank" --action "get_page_rank"
```

## Run

```bash
oo connector run "openpagerank" --action "get_page_rank" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
