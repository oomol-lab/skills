# People Data Labs · `enrich_company`

Match a single company in People Data Labs and return the top matched company record.

- **Service**: `peopledatalabs`
- **Action**: `enrich_company`
- **Action id**: `peopledatalabs.enrich_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "peopledatalabs" --action "enrich_company"
```

## Run

```bash
oo connector run "peopledatalabs" --action "enrich_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
