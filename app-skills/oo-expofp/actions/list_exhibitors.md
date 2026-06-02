# ExpoFP · `list_exhibitors`

List all exhibitors in one ExpoFP expo.

- **Service**: `expofp`
- **Action**: `list_exhibitors`
- **Action id**: `expofp.list_exhibitors`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "expofp" --action "list_exhibitors"
```

## Run

```bash
oo connector run "expofp" --action "list_exhibitors" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
