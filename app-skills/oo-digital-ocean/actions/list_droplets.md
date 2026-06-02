# DigitalOcean · `list_droplets`

List DigitalOcean Droplets with pagination and optional filtering by tag, name, or droplet type.

- **Service**: `digital_ocean`
- **Action**: `list_droplets`
- **Action id**: `digital_ocean.list_droplets`
- **Required scopes**: droplet:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_droplets"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_droplets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
