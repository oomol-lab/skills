# Firecrawl · `get_agent_status`

Get the current status and output of a Firecrawl agent job by job ID.

- **Service**: `firecrawl`
- **Action**: `get_agent_status`
- **Action id**: `firecrawl.get_agent_status`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "get_agent_status"
```

## Run

```bash
oo connector run "firecrawl" --action "get_agent_status" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
