# DigitalOcean · `list_firewalls`

List DigitalOcean cloud firewalls with pagination.

- **Service**: `digital_ocean`
- **Action**: `list_firewalls`
- **Action id**: `digital_ocean.list_firewalls`
- **Required scopes**: firewall:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_firewalls"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_firewalls" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
