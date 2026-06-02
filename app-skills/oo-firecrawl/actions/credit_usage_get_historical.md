# Firecrawl · `credit_usage_get_historical`

Get the authenticated Firecrawl team's historical credit usage summary.

- **Service**: `firecrawl`
- **Action**: `credit_usage_get_historical`
- **Action id**: `firecrawl.credit_usage_get_historical`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "firecrawl" --action "credit_usage_get_historical"
```

## Run

```bash
oo connector run "firecrawl" --action "credit_usage_get_historical" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
