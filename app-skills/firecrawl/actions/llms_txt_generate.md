# Firecrawl · `llms_txt_generate`

Start an LLMs.txt generation job for a website. This endpoint remains outside the main v2 endpoint set in Firecrawl's docs.

- **Service**: `firecrawl`
- **Action**: `llms_txt_generate`
- **Action id**: `firecrawl.llms_txt_generate`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "llms_txt_generate"
```

## Run

```bash
oo connector run "firecrawl" --action "llms_txt_generate" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
