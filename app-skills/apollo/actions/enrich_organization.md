# Apollo · `enrich_organization`

Enrich an Apollo organization by domain.

- **Service**: `apollo`
- **Action**: `enrich_organization`
- **Action id**: `apollo.enrich_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apollo" --action "enrich_organization"
```

## Run

```bash
oo connector run "apollo" --action "enrich_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
