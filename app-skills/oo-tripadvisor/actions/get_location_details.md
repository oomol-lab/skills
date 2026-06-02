# Tripadvisor · `get_location_details`

Get detailed Tripadvisor information for one location.

- **Service**: `tripadvisor`
- **Action**: `get_location_details`
- **Action id**: `tripadvisor.get_location_details`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "tripadvisor" --action "get_location_details"
```

## Run

```bash
oo connector run "tripadvisor" --action "get_location_details" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
