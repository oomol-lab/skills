# DigitalOcean · `list_databases`

List DigitalOcean managed database clusters, optionally filtered by tag.

- **Service**: `digital_ocean`
- **Action**: `list_databases`
- **Action id**: `digital_ocean.list_databases`
- **Required scopes**: database:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_databases"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_databases" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
