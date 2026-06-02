# GTmetrix · `get_location`

Get a single GTmetrix test location by ID.

- **Service**: `gtmetrix`
- **Action**: `get_location`
- **Action id**: `gtmetrix.get_location`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "get_location"
```

## Run

```bash
oo connector run "gtmetrix" --action "get_location" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
