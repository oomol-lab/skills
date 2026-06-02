# Certifier · `list_groups`

List Certifier groups with cursor pagination.

- **Service**: `certifier`
- **Action**: `list_groups`
- **Action id**: `certifier.list_groups`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "certifier" --action "list_groups"
```

## Run

```bash
oo connector run "certifier" --action "list_groups" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
