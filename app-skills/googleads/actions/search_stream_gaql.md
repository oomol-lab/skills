# Google Ads · `search_stream_gaql`

Execute a GAQL streaming query and return the aggregated result rows in one response.

- **Service**: `googleads`
- **Action**: `search_stream_gaql`
- **Action id**: `googleads.search_stream_gaql`
- **Required scopes**: googleads.read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "googleads" --action "search_stream_gaql"
```

## Run

```bash
oo connector run "googleads" --action "search_stream_gaql" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
