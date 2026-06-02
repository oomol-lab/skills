# Firecrawl · `llms_txt_get`

Get the current status and generated content of an LLMs.txt job by job ID.

- **Service**: `firecrawl`
- **Action**: `llms_txt_get`
- **Action id**: `firecrawl.llms_txt_get`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "llms_txt_get"
```

## Run

```bash
oo connector run "firecrawl" --action "llms_txt_get" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
