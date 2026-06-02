# Geoapify · `get_route`

Calculate a route between waypoints with the Geoapify Routing API.

- **Service**: `geoapify`
- **Action**: `get_route`
- **Action id**: `geoapify.get_route`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geoapify" --action "get_route"
```

## Run

```bash
oo connector run "geoapify" --action "get_route" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
