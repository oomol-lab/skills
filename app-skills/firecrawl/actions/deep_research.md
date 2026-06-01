# Firecrawl · `deep_research`

Start a Firecrawl deep research job. This endpoint remains alpha and Firecrawl currently documents it outside the main v2 endpoint set.

- **Service**: `firecrawl`
- **Action**: `deep_research`
- **Action id**: `firecrawl.deep_research`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "deep_research"
```

## Run

```bash
oo connector run "firecrawl" --action "deep_research" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
