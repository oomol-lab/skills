# Firecrawl · `queue_get`

Get the authenticated Firecrawl team's queue status and concurrency information.

- **Service**: `firecrawl`
- **Action**: `queue_get`
- **Action id**: `firecrawl.queue_get`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "queue_get"
```

## Run

```bash
oo connector run "firecrawl" --action "queue_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
