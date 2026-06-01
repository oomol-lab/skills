# Affinity · `list_person_fields`

List non-list-specific Affinity person field metadata.

- **Service**: `affinity`
- **Action**: `list_person_fields`
- **Action id**: `affinity.list_person_fields`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_person_fields"
```

## Run

```bash
oo connector run "affinity" --action "list_person_fields" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
