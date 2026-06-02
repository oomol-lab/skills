# NASA · `get_epic_enhanced`

Retrieve the most recent EPIC enhanced color image metadata.

- **Service**: `nasa`
- **Action**: `get_epic_enhanced`
- **Action id**: `nasa.get_epic_enhanced`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_epic_enhanced"
```

## Run

```bash
oo connector run "nasa" --action "get_epic_enhanced" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
