# NASA · `get_donki_solar_flares`

Retrieve DONKI solar flare events for a date range.

- **Service**: `nasa`
- **Action**: `get_donki_solar_flares`
- **Action id**: `nasa.get_donki_solar_flares`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "get_donki_solar_flares"
```

## Run

```bash
oo connector run "nasa" --action "get_donki_solar_flares" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
