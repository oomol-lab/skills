# Ambee · `geocode_by_place`

Convert a place name or address into latitude and longitude with Ambee.

- **Service**: `ambee`
- **Action**: `geocode_by_place`
- **Action id**: `ambee.geocode_by_place`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "ambee" --action "geocode_by_place"
```

## Run

```bash
oo connector run "ambee" --action "geocode_by_place" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
