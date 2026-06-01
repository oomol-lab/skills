# Firecrawl · `get_the_status_of_a_crawl_job`

Compatibility alias of crawl_get for the Composio FIRECRAWL_GET_THE_STATUS_OF_A_CRAWL_JOB action.

- **Service**: `firecrawl`
- **Action**: `get_the_status_of_a_crawl_job`
- **Action id**: `firecrawl.get_the_status_of_a_crawl_job`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "get_the_status_of_a_crawl_job"
```

## Run

```bash
oo connector run "firecrawl" --action "get_the_status_of_a_crawl_job" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
