# Firecrawl · `get_deep_research_status`

Get the current status and output of a Firecrawl deep research job by job ID.

- **Service**: `firecrawl`
- **Action**: `get_deep_research_status`
- **Action id**: `firecrawl.get_deep_research_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "get_deep_research_status"
```

## Run

```bash
oo connector run "firecrawl" --action "get_deep_research_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
