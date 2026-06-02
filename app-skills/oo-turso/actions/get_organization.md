# Turso · `get_organization`

Retrieve one Turso organization by slug.

- **Service**: `turso`
- **Action**: `get_organization`
- **Action id**: `turso.get_organization`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "get_organization"
```

## Run

```bash
oo connector run "turso" --action "get_organization" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
