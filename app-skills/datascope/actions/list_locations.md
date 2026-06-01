# DataScope · `list_locations`

List DataScope locations available to the authenticated account.

- **Service**: `datascope`
- **Action**: `list_locations`
- **Action id**: `datascope.list_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "datascope" --action "list_locations"
```

## Run

```bash
oo connector run "datascope" --action "list_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
