# timelink · `list_services`

List Timelink services with optional filtering and pagination parameters.

- **Service**: `timelink`
- **Action**: `list_services`
- **Action id**: `timelink.list_services`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "timelink" --action "list_services"
```

## Run

```bash
oo connector run "timelink" --action "list_services" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
