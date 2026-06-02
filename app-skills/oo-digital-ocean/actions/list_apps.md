# DigitalOcean · `list_apps`

List DigitalOcean App Platform apps with pagination and optional project enrichment.

- **Service**: `digital_ocean`
- **Action**: `list_apps`
- **Action id**: `digital_ocean.list_apps`
- **Required scopes**: app:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_apps"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_apps" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
