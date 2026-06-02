# Cloudflare R2 · `delete_bucket`

Delete an R2 bucket by name.

- **Service**: `cloudflare_r2`
- **Action**: `delete_bucket`
- **Action id**: `cloudflare_r2.delete_bucket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_r2" --action "delete_bucket"
```

## Run

```bash
oo connector run "cloudflare_r2" --action "delete_bucket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Destructive action.** This removes or overwrites Cloudflare R2 data. Always confirm the target and get explicit user approval before running.
