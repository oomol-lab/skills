# Affinity · `get_person`

Get one Affinity person by ID with optional field selectors.

- **Service**: `affinity`
- **Action**: `get_person`
- **Action id**: `affinity.get_person`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "get_person"
```

## Run

```bash
oo connector run "affinity" --action "get_person" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
