# Affinity · `get_opportunity`

Get one Affinity opportunity by ID.

- **Service**: `affinity`
- **Action**: `get_opportunity`
- **Action id**: `affinity.get_opportunity`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "get_opportunity"
```

## Run

```bash
oo connector run "affinity" --action "get_opportunity" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
