# Crustdata · `autocomplete_companies`

Return exact field values to reuse in Crustdata company search filters.

- **Service**: `crustdata`
- **Action**: `autocomplete_companies`
- **Action id**: `crustdata.autocomplete_companies`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "crustdata" --action "autocomplete_companies"
```

## Run

```bash
oo connector run "crustdata" --action "autocomplete_companies" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
