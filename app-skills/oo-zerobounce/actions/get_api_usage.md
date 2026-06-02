# ZeroBounce · `get_api_usage`

Get ZeroBounce API usage metrics for a date range.

- **Service**: `zerobounce`
- **Action**: `get_api_usage`
- **Action id**: `zerobounce.get_api_usage`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "zerobounce" --action "get_api_usage"
```

## Run

```bash
oo connector run "zerobounce" --action "get_api_usage" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
