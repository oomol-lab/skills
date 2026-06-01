# Gigasheet · `get_enrichment_credits`

Get the current enrichment credit usage for the authenticated Gigasheet user.

- **Service**: `gigasheet`
- **Action**: `get_enrichment_credits`
- **Action id**: `gigasheet.get_enrichment_credits`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gigasheet" --action "get_enrichment_credits"
```

## Run

```bash
oo connector run "gigasheet" --action "get_enrichment_credits" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
