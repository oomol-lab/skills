# Loomio · `list_polls`

List Loomio polls in one group with optional status filtering and offset pagination.

- **Service**: `loomio`
- **Action**: `list_polls`
- **Action id**: `loomio.list_polls`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "loomio" --action "list_polls"
```

## Run

```bash
oo connector run "loomio" --action "list_polls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
