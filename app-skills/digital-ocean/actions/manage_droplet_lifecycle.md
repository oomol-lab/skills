# DigitalOcean · `manage_droplet_lifecycle`

Initiate a basic DigitalOcean Droplet lifecycle action such as reboot, shutdown, or power cycle.

- **Service**: `digital_ocean`
- **Action**: `manage_droplet_lifecycle`
- **Action id**: `digital_ocean.manage_droplet_lifecycle`
- **Required scopes**: droplet:update

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "manage_droplet_lifecycle"
```

## Run

```bash
oo connector run "digital_ocean" --action "manage_droplet_lifecycle" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
