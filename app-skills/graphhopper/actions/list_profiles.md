# GraphHopper · `list_profiles`

List custom routing profiles available to the GraphHopper API key.

- **Service**: `graphhopper`
- **Action**: `list_profiles`
- **Action id**: `graphhopper.list_profiles`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "graphhopper" --action "list_profiles"
```

## Run

```bash
oo connector run "graphhopper" --action "list_profiles" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
