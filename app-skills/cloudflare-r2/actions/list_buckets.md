# Cloudflare R2 · `list_buckets`

List the R2 buckets in a Cloudflare account.

- **Service**: `cloudflare_r2`
- **Action**: `list_buckets`
- **Action id**: `cloudflare_r2.list_buckets`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_r2" --action "list_buckets"
```

## Run

```bash
oo connector run "cloudflare_r2" --action "list_buckets" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
