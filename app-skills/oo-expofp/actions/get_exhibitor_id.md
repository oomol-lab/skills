# ExpoFP · `get_exhibitor_id`

Resolve an ExpoFP exhibitor ID from expo ID and exhibitor external ID.

- **Service**: `expofp`
- **Action**: `get_exhibitor_id`
- **Action id**: `expofp.get_exhibitor_id`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "get_exhibitor_id"
```

## Run

```bash
oo connector run "expofp" --action "get_exhibitor_id" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
