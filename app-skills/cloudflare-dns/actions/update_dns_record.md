# Cloudflare DNS · `update_dns_record`

Patch one DNS record inside a Cloudflare zone.

- **Service**: `cloudflare_dns`
- **Action**: `update_dns_record`
- **Action id**: `cloudflare_dns.update_dns_record`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_dns" --action "update_dns_record"
```

## Run

```bash
oo connector run "cloudflare_dns" --action "update_dns_record" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare DNS state. Confirm the exact payload and intended effect with the user before running.
