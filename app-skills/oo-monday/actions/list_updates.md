# Monday · `list_updates`

List Monday updates with optional date filtering.

- **Service**: `monday`
- **Action**: `list_updates`
- **Action id**: `monday.list_updates`
- **Required scopes**: updates:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "monday" --action "list_updates"
```

## Run

```bash
oo connector run "monday" --action "list_updates" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
