# Cloudflare DNS · `get_zone`

Get one Cloudflare zone by zone ID.

- **Service**: `cloudflare_dns`
- **Action**: `get_zone`
- **Action id**: `cloudflare_dns.get_zone`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_dns" --action "get_zone"
```

## Run

```bash
oo connector run "cloudflare_dns" --action "get_zone" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
