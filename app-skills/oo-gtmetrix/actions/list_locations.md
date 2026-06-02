# GTmetrix · `list_locations`

List GTmetrix test locations available to the connected account.

- **Service**: `gtmetrix`
- **Action**: `list_locations`
- **Action id**: `gtmetrix.list_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "gtmetrix" --action "list_locations"
```

## Run

```bash
oo connector run "gtmetrix" --action "list_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
