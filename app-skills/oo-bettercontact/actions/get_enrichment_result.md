# BetterContact · `get_enrichment_result`

Get the current BetterContact enrichment result for a submitted request ID.

- **Service**: `bettercontact`
- **Action**: `get_enrichment_result`
- **Action id**: `bettercontact.get_enrichment_result`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "bettercontact" --action "get_enrichment_result"
```

## Run

```bash
oo connector run "bettercontact" --action "get_enrichment_result" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
