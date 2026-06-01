# Cloudflare Worker · `get_worker`

Get one Worker by Worker ID using the Workers beta API.

- **Service**: `cloudflare_worker`
- **Action**: `get_worker`
- **Action id**: `cloudflare_worker.get_worker`

## Inspect the schema

Always fetch the authoritative input/output schema before building a payload — fields and defaults can change upstream:

```bash
oo connector schema "cloudflare_worker" --action "get_worker"
```

## Run

```bash
oo connector run "cloudflare_worker" --action "get_worker" --data '{}' --json
```

Replace `{}` with a JSON object that matches the input schema. The response is `{ "data": ..., "meta": { "executionId": "..." } }`.
