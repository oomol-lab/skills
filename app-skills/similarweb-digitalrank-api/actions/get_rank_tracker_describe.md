# Similarweb · `get_rank_tracker_describe`

List Similarweb rank-tracker campaigns and their scraping configurations for follow-up reporting APIs.

- **Service**: `similarweb_digitalrank_api`
- **Action**: `get_rank_tracker_describe`
- **Action id**: `similarweb_digitalrank_api.get_rank_tracker_describe`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "similarweb_digitalrank_api" --action "get_rank_tracker_describe"
```

## Run

```bash
oo connector run "similarweb_digitalrank_api" --action "get_rank_tracker_describe" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
