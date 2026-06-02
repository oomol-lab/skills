# DigitalOcean · `list_domain_records`

List DNS records for one DigitalOcean domain, optionally filtered by record name or type.

- **Service**: `digital_ocean`
- **Action**: `list_domain_records`
- **Action id**: `digital_ocean.list_domain_records`
- **Required scopes**: domain:read

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "digital_ocean" --action "list_domain_records"
```

## Run

```bash
oo connector run "digital_ocean" --action "list_domain_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
