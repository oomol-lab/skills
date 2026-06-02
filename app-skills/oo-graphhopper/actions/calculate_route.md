# GraphHopper · `calculate_route`

Calculate the best route connecting two or more coordinates with the GraphHopper Routing API.

- **Service**: `graphhopper`
- **Action**: `calculate_route`
- **Action id**: `graphhopper.calculate_route`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "graphhopper" --action "calculate_route"
```

## Run

```bash
oo connector run "graphhopper" --action "calculate_route" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
