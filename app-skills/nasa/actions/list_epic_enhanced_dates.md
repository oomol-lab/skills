# NASA · `list_epic_enhanced_dates`

List the dates with available EPIC enhanced color imagery.

- **Service**: `nasa`
- **Action**: `list_epic_enhanced_dates`
- **Action id**: `nasa.list_epic_enhanced_dates`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "list_epic_enhanced_dates"
```

## Run

```bash
oo connector run "nasa" --action "list_epic_enhanced_dates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
