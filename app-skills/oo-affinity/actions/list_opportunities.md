# Affinity · `list_opportunities`

List Affinity opportunities with optional ID filtering.

- **Service**: `affinity`
- **Action**: `list_opportunities`
- **Action id**: `affinity.list_opportunities`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_opportunities"
```

## Run

```bash
oo connector run "affinity" --action "list_opportunities" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
