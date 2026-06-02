# ExpoFP · `get_exhibitor`

Get one ExpoFP exhibitor by exhibitor ID.

- **Service**: `expofp`
- **Action**: `get_exhibitor`
- **Action id**: `expofp.get_exhibitor`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "get_exhibitor"
```

## Run

```bash
oo connector run "expofp" --action "get_exhibitor" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
