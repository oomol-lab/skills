# People Data Labs · `enrich_person`

Match a single person in People Data Labs and return the top matched person record.

- **Service**: `peopledatalabs`
- **Action**: `enrich_person`
- **Action id**: `peopledatalabs.enrich_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "peopledatalabs" --action "enrich_person"
```

## Run

```bash
oo connector run "peopledatalabs" --action "enrich_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
