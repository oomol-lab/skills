# Pingdom · `list_checks`

List Pingdom uptime checks with optional pagination and tag filters.

- **Service**: `pingdom`
- **Action**: `list_checks`
- **Action id**: `pingdom.list_checks`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "pingdom" --action "list_checks"
```

## Run

```bash
oo connector run "pingdom" --action "list_checks" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
