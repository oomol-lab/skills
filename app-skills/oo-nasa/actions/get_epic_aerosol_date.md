# NASA · `get_epic_aerosol_date`

Retrieve EPIC aerosol imagery metadata for a specific date.

- **Service**: `nasa`
- **Action**: `get_epic_aerosol_date`
- **Action id**: `nasa.get_epic_aerosol_date`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_epic_aerosol_date"
```

## Run

```bash
oo connector run "nasa" --action "get_epic_aerosol_date" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
