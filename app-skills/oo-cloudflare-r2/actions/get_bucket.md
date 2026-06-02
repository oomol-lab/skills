# Cloudflare R2 · `get_bucket`

Get one R2 bucket by name.

- **Service**: `cloudflare_r2`
- **Action**: `get_bucket`
- **Action id**: `cloudflare_r2.get_bucket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_r2" --action "get_bucket"
```

## Run

```bash
oo connector run "cloudflare_r2" --action "get_bucket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
