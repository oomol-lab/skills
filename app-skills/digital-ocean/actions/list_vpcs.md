# DigitalOcean · `list_vpcs`

List DigitalOcean VPC networks with pagination.

- **Service**: `digital_ocean`
- **Action**: `list_vpcs`
- **Action id**: `digital_ocean.list_vpcs`
- **Required scopes**: vpc:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_vpcs"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_vpcs" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
