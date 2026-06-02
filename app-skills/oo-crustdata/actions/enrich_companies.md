# Crustdata · `enrich_companies`

Enrich companies from one identifier family and optional field sections, returning ranked company matches with detailed profiles.

- **Service**: `crustdata`
- **Action**: `enrich_companies`
- **Action id**: `crustdata.enrich_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crustdata" --action "enrich_companies"
```

## Run

```bash
oo connector run "crustdata" --action "enrich_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
