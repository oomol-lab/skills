# Geoapify · `get_route_matrix`

Calculate a travel matrix between sources and targets with Geoapify.

- **Service**: `geoapify`
- **Action**: `get_route_matrix`
- **Action id**: `geoapify.get_route_matrix`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "geoapify" --action "get_route_matrix"
```

## Run

```bash
oo connector run "geoapify" --action "get_route_matrix" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
