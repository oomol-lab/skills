# NASA · `get_apod`

Retrieve NASA's Astronomy Picture of the Day metadata for a specific date or the current day.

- **Service**: `nasa`
- **Action**: `get_apod`
- **Action id**: `nasa.get_apod`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_apod"
```

## Run

```bash
oo connector run "nasa" --action "get_apod" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
