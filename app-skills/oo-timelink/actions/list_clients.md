# timelink · `list_clients`

List Timelink clients with optional filtering and pagination parameters.

- **Service**: `timelink`
- **Action**: `list_clients`
- **Action id**: `timelink.list_clients`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "list_clients"
```

## Run

```bash
oo connector run "timelink" --action "list_clients" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
