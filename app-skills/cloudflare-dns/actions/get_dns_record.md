# Cloudflare DNS · `get_dns_record`

Get one DNS record from a Cloudflare zone.

- **Service**: `cloudflare_dns`
- **Action**: `get_dns_record`
- **Action id**: `cloudflare_dns.get_dns_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_dns" --action "get_dns_record"
```

## Run

```bash
oo connector run "cloudflare_dns" --action "get_dns_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
