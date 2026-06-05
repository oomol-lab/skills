# Tomba · `enrich`

Enrich a known email address with person and company attributes.

- **Service**: `tomba`
- **Action**: `enrich`
- **Action id**: `tomba.enrich`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tomba" --action "enrich"
```

## Run

```bash
oo connector run "tomba" --action "enrich" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
