# NASA · `search_near_earth_objects`

Search NASA near-Earth objects by closest approach date within a maximum 7-day window.

- **Service**: `nasa`
- **Action**: `search_near_earth_objects`
- **Action id**: `nasa.search_near_earth_objects`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "nasa" --action "search_near_earth_objects"
```

## Run

```bash
oo connector run "nasa" --action "search_near_earth_objects" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
