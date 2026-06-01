# Breeze · `list_people`

List people from Breeze with optional details, pagination, and filter_json criteria.

- **Service**: `breeze`
- **Action**: `list_people`
- **Action id**: `breeze.list_people`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "breeze" --action "list_people"
```

## Run

```bash
oo connector run "breeze" --action "list_people" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
