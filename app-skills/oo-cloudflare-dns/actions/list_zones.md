# Cloudflare DNS · `list_zones`

List the Cloudflare zones visible to the current API token.

- **Service**: `cloudflare_dns`
- **Action**: `list_zones`
- **Action id**: `cloudflare_dns.list_zones`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_dns" --action "list_zones"
```

## Run

```bash
oo connector run "cloudflare_dns" --action "list_zones" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
