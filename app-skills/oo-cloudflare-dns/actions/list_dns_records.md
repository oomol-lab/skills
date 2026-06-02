# Cloudflare DNS · `list_dns_records`

List DNS records inside one Cloudflare zone.

- **Service**: `cloudflare_dns`
- **Action**: `list_dns_records`
- **Action id**: `cloudflare_dns.list_dns_records`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_dns" --action "list_dns_records"
```

## Run

```bash
oo connector run "cloudflare_dns" --action "list_dns_records" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
