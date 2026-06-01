# Clockify · `list_time_entries`

List Clockify time entries for a user in a workspace.

- **Service**: `clockify`
- **Action**: `list_time_entries`
- **Action id**: `clockify.list_time_entries`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "clockify" --action "list_time_entries"
```

## Run

```bash
oo connector run "clockify" --action "list_time_entries" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
