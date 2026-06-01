# Cloudflare R2 · `get_bucket_cors_policy`

Fetch the bucket-level CORS policy for an R2 bucket.

- **Service**: `cloudflare_r2`
- **Action**: `get_bucket_cors_policy`
- **Action id**: `cloudflare_r2.get_bucket_cors_policy`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_r2" --action "get_bucket_cors_policy"
```

## Run

```bash
oo connector run "cloudflare_r2" --action "get_bucket_cors_policy" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
