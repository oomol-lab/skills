# DigitalOcean · `list_load_balancers`

List DigitalOcean load balancers with pagination.

- **Service**: `digital_ocean`
- **Action**: `list_load_balancers`
- **Action id**: `digital_ocean.list_load_balancers`
- **Required scopes**: load_balancer:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_load_balancers"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_load_balancers" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
