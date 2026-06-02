# Turso · `list_organizations`

List organizations visible to the current Turso Platform API token.

- **Service**: `turso`
- **Action**: `list_organizations`
- **Action id**: `turso.list_organizations`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "turso" --action "list_organizations"
```

## Run

```bash
oo connector run "turso" --action "list_organizations" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
