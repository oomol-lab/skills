# DigitalOcean · `get_droplet`

Retrieve one DigitalOcean Droplet by numeric droplet ID.

- **Service**: `digital_ocean`
- **Action**: `get_droplet`
- **Action id**: `digital_ocean.get_droplet`
- **Required scopes**: droplet:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "get_droplet"
```

## Run

```bash
oo connector run "digital_ocean" --action "get_droplet" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
