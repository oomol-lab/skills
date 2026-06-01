# Apollo · `enrich_person`

Enrich an Apollo person with the first-pass matching inputs.

- **Service**: `apollo`
- **Action**: `enrich_person`
- **Action id**: `apollo.enrich_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "apollo" --action "enrich_person"
```

## Run

```bash
oo connector run "apollo" --action "enrich_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
