# Firecrawl · `start_agent`

Start a Firecrawl agent job for multi-page autonomous browsing and extraction.

- **Service**: `firecrawl`
- **Action**: `start_agent`
- **Action id**: `firecrawl.start_agent`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "start_agent"
```

## Run

```bash
oo connector run "firecrawl" --action "start_agent" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
