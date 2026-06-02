# NASA · `get_epic_aerosol`

Retrieve the most recent EPIC aerosol imagery metadata.

- **Service**: `nasa`
- **Action**: `get_epic_aerosol`
- **Action id**: `nasa.get_epic_aerosol`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_epic_aerosol"
```

## Run

```bash
oo connector run "nasa" --action "get_epic_aerosol" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
