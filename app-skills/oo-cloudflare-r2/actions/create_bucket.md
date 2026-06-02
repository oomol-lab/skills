# Cloudflare R2 · `create_bucket`

Create an R2 bucket in a Cloudflare account.

- **Service**: `cloudflare_r2`
- **Action**: `create_bucket`
- **Action id**: `cloudflare_r2.create_bucket`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_r2" --action "create_bucket"
```

## Run

```bash
oo connector run "cloudflare_r2" --action "create_bucket" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.

> **Write action.** This changes Cloudflare R2 state. Confirm the exact payload and intended effect with the user before running.
