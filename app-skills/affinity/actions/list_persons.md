# Affinity · `list_persons`

List Affinity persons with optional ID and field selectors.

- **Service**: `affinity`
- **Action**: `list_persons`
- **Action id**: `affinity.list_persons`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "affinity" --action "list_persons"
```

## Run

```bash
oo connector run "affinity" --action "list_persons" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
