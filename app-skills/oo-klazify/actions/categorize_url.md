# Klazify · `categorize_url`

Categorize a website URL with Klazify and return the aggregated domain enrichment overview.

- **Service**: `klazify`
- **Action**: `categorize_url`
- **Action id**: `klazify.categorize_url`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "klazify" --action "categorize_url"
```

## Run

```bash
oo connector run "klazify" --action "categorize_url" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
