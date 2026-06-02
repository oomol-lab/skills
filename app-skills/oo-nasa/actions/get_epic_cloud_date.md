# NASA · `get_epic_cloud_date`

Retrieve EPIC cloud fraction imagery metadata for a specific date.

- **Service**: `nasa`
- **Action**: `get_epic_cloud_date`
- **Action id**: `nasa.get_epic_cloud_date`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_epic_cloud_date"
```

## Run

```bash
oo connector run "nasa" --action "get_epic_cloud_date" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
