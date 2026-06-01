# Hacker News · `get_job_stories`

Get the latest job story IDs from Hacker News.

- **Service**: `hackernews`
- **Action**: `get_job_stories`
- **Action id**: `hackernews.get_job_stories`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "hackernews" --action "get_job_stories"
```

## Run

```bash
oo connector run "hackernews" --action "get_job_stories" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
