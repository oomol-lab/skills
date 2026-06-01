# Freshservice · `list_locations`

List Freshservice locations to help callers resolve account-level location metadata.

- **Service**: `freshservice`
- **Action**: `list_locations`
- **Action id**: `freshservice.list_locations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "freshservice" --action "list_locations"
```

## Run

```bash
oo connector run "freshservice" --action "list_locations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
