# Firecrawl · `agent_cancel`

Cancel a running Firecrawl agent job by job ID.

- **Service**: `firecrawl`
- **Action**: `agent_cancel`
- **Action id**: `firecrawl.agent_cancel`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "agent_cancel"
```

## Run

```bash
oo connector run "firecrawl" --action "agent_cancel" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
