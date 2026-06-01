# Affinity · `get_company`

Get one Affinity company by ID with optional field selectors.

- **Service**: `affinity`
- **Action**: `get_company`
- **Action id**: `affinity.get_company`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "get_company"
```

## Run

```bash
oo connector run "affinity" --action "get_company" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
