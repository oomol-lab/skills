# Firecrawl · `extract`

Start a Firecrawl extract job that returns structured data for one or more URLs.

- **Service**: `firecrawl`
- **Action**: `extract`
- **Action id**: `firecrawl.extract`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "extract"
```

## Run

```bash
oo connector run "firecrawl" --action "extract" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
