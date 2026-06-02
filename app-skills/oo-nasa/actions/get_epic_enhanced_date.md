# NASA · `get_epic_enhanced_date`

Retrieve EPIC enhanced color image metadata for a specific date.

- **Service**: `nasa`
- **Action**: `get_epic_enhanced_date`
- **Action id**: `nasa.get_epic_enhanced_date`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_epic_enhanced_date"
```

## Run

```bash
oo connector run "nasa" --action "get_epic_enhanced_date" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
