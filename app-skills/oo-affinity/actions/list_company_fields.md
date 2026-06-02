# Affinity · `list_company_fields`

List non-list-specific Affinity company field metadata.

- **Service**: `affinity`
- **Action**: `list_company_fields`
- **Action id**: `affinity.list_company_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_company_fields"
```

## Run

```bash
oo connector run "affinity" --action "list_company_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
