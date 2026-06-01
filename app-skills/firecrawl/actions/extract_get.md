# Firecrawl · `extract_get`

Get the current status and output of a Firecrawl extract job by job ID.

- **Service**: `firecrawl`
- **Action**: `extract_get`
- **Action id**: `firecrawl.extract_get`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "extract_get"
```

## Run

```bash
oo connector run "firecrawl" --action "extract_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
